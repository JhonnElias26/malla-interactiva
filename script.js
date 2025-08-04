const STORAGE_KEY = "mallaTMEstado";
const contenedor = document.getElementById("contenedor-semestres");
const progresoElem = document.getElementById("progreso");

let malla = [];
let mapaRamos = new Map();

// --- Funciones de almacenamiento ---
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

// --- Crear mapa de ramos para acceso rápido ---
function crearMapaRamos() {
  mapaRamos.clear();
  malla.forEach(semestre => {
    semestre.ramos.forEach(ramo => {
      mapaRamos.set(ramo.nombre, ramo);
    });
  });
}

// --- Actualizar desbloqueos ---
function actualizarDesbloqueos() {
  const aprobadosSet = new Set();
  malla.forEach(s => s.ramos.forEach(r => {
    if (r.estado === "aprobado") aprobadosSet.add(r.nombre);
  }));

  let huboCambios = false;

  malla.forEach(s => s.ramos.forEach(r => {
    if (r.estado === "bloqueado") {
      if (!r.prerequisitos || r.prerequisitos.length === 0) {
        r.estado = "desbloqueado";
        huboCambios = true;
      } else {
        const puedeDesbloquear = r.prerequisitos.every(pr => aprobadosSet.has(pr));
        if (puedeDesbloquear) {
          r.estado = "desbloqueado";
          huboCambios = true;
        }
      }
    }
  }));

  if (huboCambios) {
    guardarEstado();
    renderizarEstados();
  }
}

// --- Renderizar UI ---
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
      // Si el estado no está definido (carga inicial) lo ponemos bloqueado salvo que no tenga prerequisitos
      if (!ramo.estado) {
        ramo.estado = (ramo.prerequisitos && ramo.prerequisitos.length > 0) ? "bloqueado" : "desbloqueado";
      }

      const li = document.createElement("li");
      li.classList.add("ramo", ramo.estado);
      li.tabIndex = ramo.estado === "bloqueado" ? -1 : 0;
      li.setAttribute("role", "button");
      li.setAttribute("aria-pressed", ramo.estado === "aprobado" ? "true" : "false");
      li.setAttribute("aria-disabled", ramo.estado === "bloqueado" ? "true" : "false");

      li.innerHTML = ramo.nombre + (ramo.estado === "aprobado" ? " &#10003;" : "");

      // Tooltip textos
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

function crearTooltip(texto) {
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  tooltip.textContent = texto;
  tooltip.style.position = "absolute";
  tooltip.style.background = "#1b2a49";
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

// --- Inicialización ---
function init() {
  const estadoGuardado = cargarEstadoGuardado();

  fetch("malla.json")
    .then(res => {
      if (!res.ok) throw new Error("Error cargando malla.json");
      return res.json();
    })
    .then(data => {
      if (estadoGuardado) {
        malla = estadoGuardado;
      } else {
        malla = data;
      }

      crearMapaRamos();
      actualizarDesbloqueos();
      cargarMallaUI();
    })
    .catch(err => {
      console.error(err);
      // En caso de error, crear malla vacía para no romper UI
      malla = [];
      cargarMallaUI();
    });
}

init();
