const STORAGE_KEY = "mallaTMEstado";

const contenedor = document.getElementById("contenedor-semestres");
const progresoElem = document.getElementById("progreso");

// Botón reset (lo creamos dinámicamente)
const btnReset = document.createElement("button");
btnReset.textContent = "Resetear progreso";
btnReset.style.margin = "0 auto 20px auto";
btnReset.style.display = "block";
btnReset.style.padding = "8px 16px";
btnReset.style.backgroundColor = "#1b2a49";
btnReset.style.color = "white";
btnReset.style.border = "none";
btnReset.style.borderRadius = "6px";
btnReset.style.cursor = "pointer";
btnReset.style.fontWeight = "600";
btnReset.style.transition = "background-color 0.3s ease";
btnReset.setAttribute("aria-label", "Resetear progreso y reiniciar malla curricular");

btnReset.addEventListener("mouseenter", () => {
  btnReset.style.backgroundColor = "#5472d3";
});
btnReset.addEventListener("mouseleave", () => {
  btnReset.style.backgroundColor = "#1b2a49";
});
btnReset.addEventListener("click", () => {
  if (confirm("¿Seguro que quieres resetear todo el progreso?")) {
    localStorage.removeItem(STORAGE_KEY);
    malla = cargarMallaJSON();
    crearMapaRamos();
    cargarMallaUI();
  }
});
document.body.insertBefore(btnReset, contenedor);

// JSON de la malla (igual que antes, simplificado aquí para ejemplo)
function cargarMallaJSON() {
  return [
    {
      semestre: "1 Semestre",
      ramos: [
        { nombre: "Anatomía general", estado: "desbloqueado", abre: ["Fisiología humana", "Anatomía del sistema visual"], prerequisitos: [] },
        { nombre: "Biología Humana e Histología", estado: "desbloqueado", abre: ["Fisiología humana", "Anatomía del sistema visual"], prerequisitos: [] },
        { nombre: "Química general y orgánica", estado: "desbloqueado", abre: ["Bioquímica"], prerequisitos: [] },
        { nombre: "Matemáticas", estado: "desbloqueado", abre: ["Física general"], prerequisitos: [] },
        { nombre: "Introducción a la tecnología médica en oftalmología", estado: "desbloqueado", abre: ["Interacción humana y sociocultural"], prerequisitos: [] },
        { nombre: "Expresión oral y escrita", estado: "desbloqueado", abre: ["Interacción humana y sociocultural"], prerequisitos: [] },
        { nombre: "Taller de inglés", estado: "desbloqueado", abre: ["Inglés general"], prerequisitos: [] }
      ]
    },
    // ... Aquí el resto igual, agregando prerequisitos vacíos o según convenga.
    // Nota: Agregué el campo "prerequisitos" para facilitar mostrar y lógica.
  ];
}

// Cargar o inicializar malla
let malla = null;
let mapaRamos = new Map();

function cargarEstadoGuardado() {
  const json = localStorage.getItem(STORAGE_KEY);
  if (!json) return null;
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}

function guardarEstado() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(malla));
}

function crearMapaRamos() {
  mapaRamos.clear();
  malla.forEach(semestre => {
    semestre.ramos.forEach(ramo => {
      mapaRamos.set(ramo.nombre, ramo);
    });
  });
}

// Actualiza desbloqueos optimizando solo ramos afectados
function actualizarDesbloqueos() {
  let huboCambios = false;

  // Primero crear set de aprobados para chequear prerrequisitos
  const aprobadosSet = new Set();
  malla.forEach(s => s.ramos.forEach(r => {
    if (r.estado === "aprobado") aprobadosSet.add(r.nombre);
  }));

  // Verificamos ramos bloqueados que puedan desbloquearse
  malla.forEach(s => {
    s.ramos.forEach(r => {
      if (r.estado === "bloqueado") {
        // Si no tiene prerrequisitos, desbloquear
        if (!r.prerequisitos || r.prerequisitos.length === 0) {
          r.estado = "desbloqueado";
          huboCambios = true;
        } else {
          // Si todos los prerrequisitos están aprobados
          const puedeDesbloquear = r.prerequisitos.every(pr => aprobadosSet.has(pr));
          if (puedeDesbloquear) {
            r.estado = "desbloqueado";
            huboCambios = true;
          }
        }
      }
    });
  });

  if (huboCambios) {
    guardarEstado();
    renderizarEstados();
  }
}

// Crear tooltip que muestra prerequisitos y abre
function crearTooltip(texto) {
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  tooltip.textContent = texto;
  tooltip.style.position = "absolute";
  tooltip.style.background = "var(--color-azul-navy)";
  tooltip.style.color = "white";
  tooltip.style.padding = "6px 10px";
  tooltip.style.borderRadius = "6px";
  tooltip.style.fontSize = "0.8rem";
  tooltip.style.pointerEvents = "none";
  tooltip.style.opacity = "0";
  tooltip.style.transition = "opacity 0.3s ease";
  tooltip.style.zIndex = "1000";
  document.body.appendChild(tooltip);
  return tooltip;
}

function posicionarTooltip(event, tooltip) {
  const padding = 10;
  const x = event.pageX + padding;
  const y = event.pageY + padding;
  tooltip.style.left = x + "px";
  tooltip.style.top = y + "px";
}

function cargarMallaUI() {
  contenedor.innerHTML = "";

  malla.forEach(semestre => {
    const divSem = document.createElement("div");
    divSem.classList.add("semestre");
    divSem.setAttribute("role", "region");
    divSem.setAttribute("aria-label", semestre.semestre);

    const h2 = document.createElement("h2");
    h2.textContent = semestre.semestre;
    divSem.appendChild(h2);

    const ul = document.createElement("ul");
    ul.classList.add("lista-ramos");

    semestre.ramos.forEach(ramo => {
      const li = document.createElement("li");
      li.classList.add("ramo", ramo.estado);
      li.tabIndex = ramo.estado === "bloqueado" ? -1 : 0;
      li.setAttribute("role", "button");
      li.setAttribute("aria-pressed", ramo.estado === "aprobado" ? "true" : "false");
      li.setAttribute("aria-disabled", ramo.estado === "bloqueado" ? "true" : "false");

      // Ícono check para aprobado
      li.innerHTML = ramo.nombre + (ramo.estado === "aprobado" ? " &#10003;" : "");

      // Tooltip info
      const prereqsText = ramo.prerequisitos && ramo.prerequisitos.length > 0
        ? "Prerrequisitos: " + ramo.prerequisitos.join(", ")
        : "Sin prerrequisitos";
      const abreText = ramo.abre && ramo.abre.length > 0
        ? "Abre: " + ramo.abre.join(", ")
        : "No abre otros ramos";

      let tooltip = null;

      li.addEventListener("mouseenter", (e) => {
        tooltip = crearTooltip(prereqsText + "\n" + abreText);
        posicionarTooltip(e, tooltip);
        tooltip.style.opacity = "1";
      });
      li.addEventListener("mousemove", (e) => {
        if (tooltip) posicionarTooltip(e, tooltip);
      });
      li.addEventListener("mouseleave", () => {
        if (tooltip) {
          tooltip.style.opacity = "0";
          setTimeout(() => tooltip.remove(), 300);
          tooltip = null;
        }
      });

      if (ramo.estado !== "bloqueado") {
        li.style.cursor = "pointer";

        li.addEventListener("click", () => {
          // Alterna aprobado/desbloqueado
          if (ramo.estado === "desbloqueado") {
            ramo.estado = "aprobado";
          } else if (ramo.estado === "aprobado") {
            ramo.estado = "desbloqueado";
          }
          guardarEstado();
          actualizarProgreso();
          actualizarDesbloqueos();
          renderizarEstados();
        });

        // Accesibilidad: toggle con tecla espacio o enter
        li.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            li.click();
          }
        });
      } else {
        li.style.cursor = "not-allowed";
      }

      ul.appendChild(li);
    });

    divSem.appendChild(ul);
    contenedor.appendChild(divSem);
  });

  actualizarProgreso();
  actualizarDesbloqueos();
}

// Actualiza progreso visible
function actualizarProgreso() {
  let total = 0;
  let aprobados = 0;
  malla.forEach(s => s.ramos.forEach(r => {
    total++;
    if (r.estado === "aprobado") aprobados++;
  }));

  const porcentaje = total ? Math.round((aprobados / total) * 100) : 0;
  progresoElem.textContent = `Progreso: ${porcentaje}%`;
}

// Solo actualiza clases y atributos de los ramos en DOM
function renderizarEstados() {
  const liElems = document.querySelectorAll("#contenedor-semestres .ramo");
  liElems.forEach(li => {
    const nombre = li.textContent.replace(" ✔", "").trim();
    const ramo = mapaRamos.get(nombre);
    if (!ramo) return;

    li.classList.remove("bloqueado", "desbloqueado", "aprobado");
    li.classList.add(ramo.estado);

    li.setAttribute("aria-pressed", ramo.estado === "aprobado" ? "true" : "false");
    li.setAttribute("aria-disabled", ramo.estado === "bloqueado" ? "true" : "false");
    li.tabIndex = ramo.estado === "bloqueado" ? -1 : 0;

    li.style.cursor = ramo.estado === "bloqueado" ? "not-allowed" : "pointer";

    if (ramo.estado === "aprobado" && !li.innerHTML.includes("✔")) {
      li.innerHTML = ramo.nombre + " &#10003;";
    } else if (ramo.estado !== "aprobado") {
      li.innerHTML = ramo.nombre;
    }
  });
}

// Inicialización
function init() {
  const estadoGuardado = cargarEstadoGuardado();
  if (estadoGuardado) {
    malla = estadoGuardado;
  } else {
    malla = cargarMallaJSON();
  }
  crearMapaRamos();
  cargarMallaUI();
}

init();
