function cargarMallaJSON() {
  return [
    // PRIMER AÑO
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
    {
      semestre: "2 Semestre",
      ramos: [
        { nombre: "Fisiología humana", estado: "bloqueado", abre: ["Fisiopatología humana", "Enfermería básica"], prerequisitos: ["Anatomía general", "Biología Humana e Histología"] },
        { nombre: "Anatomía del sistema visual", estado: "bloqueado", abre: [], prerequisitos: ["Anatomía general", "Biología Humana e Histología"] },
        { nombre: "Bioquímica", estado: "bloqueado", abre: ["Farmacología general"], prerequisitos: ["Química general y orgánica"] },
        { nombre: "Física general", estado: "bloqueado", abre: ["Física óptica"], prerequisitos: ["Matemáticas"] },
        { nombre: "Inglés general", estado: "bloqueado", abre: ["Inglés técnico"], prerequisitos: ["Taller de inglés"] },
        { nombre: "Interacción humana y sociocultural", estado: "bloqueado", abre: ["Psicología de la salud"], prerequisitos: ["Introducción a la tecnología médica en oftalmología", "Expresión oral y escrita"] }
      ]
    },
    // SEGUNDO AÑO
    {
      semestre: "3 Semestre",
      ramos: [
        { nombre: "Fisiopatología humana", estado: "bloqueado", abre: ["Microbiología e inmunología", "Semiología del sistema visual"], prerequisitos: ["Fisiología humana"] },
        { nombre: "Enfermería básica", estado: "bloqueado", abre: ["Farmacología ocular"], prerequisitos: ["Fisiología humana"] },
        { nombre: "Farmacología general", estado: "bloqueado", abre: ["Farmacología ocular"], prerequisitos: ["Bioquímica"] },
        { nombre: "Física óptica", estado: "bloqueado", abre: ["Fundamentos de la oftalmología"], prerequisitos: ["Física general"] },
        { nombre: "Psicología de la salud", estado: "bloqueado", abre: ["Salud pública"], prerequisitos: ["Interacción humana y sociocultural"] },
        { nombre: "Inglés técnico", estado: "bloqueado", abre: [], prerequisitos: ["Inglés general"] }
      ]
    },
    {
      semestre: "4 Semestre",
      ramos: [
        { nombre: "Microbiología e inmunología", estado: "bloqueado", abre: [], prerequisitos: ["Fisiopatología humana"] },
        { nombre: "Semiología del sistema visual", estado: "bloqueado", abre: ["Fundamentos del glaucoma", "Fundamentos del estrabismo"], prerequisitos: ["Fisiopatología humana"] },
        { nombre: "Farmacología ocular", estado: "bloqueado", abre: ["Fundamentos del glaucoma"], prerequisitos: ["Farmacología general", "Enfermería básica"] },
        { nombre: "Fundamentos de la oftalmología", estado: "bloqueado", abre: ["Fundamentos del estrabismo", "Fundamentos del campo visual"], prerequisitos: ["Física óptica"] },
        { nombre: "Salud pública", estado: "bloqueado", abre: ["Gestión y liderazgo", "Bioestadística"], prerequisitos: ["Psicología de la salud"] },
        { nombre: "Electivo de formación general", estado: "bloqueado", abre: [], prerequisitos: [] }
      ]
    },
    // TERCER AÑO
    {
      semestre: "5 Semestre",
      ramos: [
        { nombre: "Fundamentos del glaucoma", estado: "bloqueado", abre: ["Glaucoma y campo visual", "Optometría 1"], prerequisitos: ["Semiología del sistema visual", "Farmacología ocular"] },
        { nombre: "Fundamentos del estrabismo", estado: "bloqueado", abre: ["Técnicas ortópticas y pleópticas", "Optometría 1"], prerequisitos: ["Semiología del sistema visual", "Fundamentos de la oftalmología"] },
        { nombre: "Fundamentos del campo visual", estado: "bloqueado", abre: ["Glaucoma y campo visual"], prerequisitos: ["Fundamentos de la oftalmología"] },
        { nombre: "Gestión y liderazgo", estado: "bloqueado", abre: [], prerequisitos: ["Salud pública"] },
        { nombre: "Bioestadística", estado: "bloqueado", abre: ["Metodología de la investigación en oftalmología"], prerequisitos: ["Salud pública"] },
        { nombre: "Bioética", estado: "bloqueado", abre: ["Metodología de la investigación en oftalmología"], prerequisitos: [] }
      ]
    },
    {
      semestre: "6 Semestre",
      ramos: [
        { nombre: "Glaucoma y campo visual", estado: "bloqueado", abre: ["Neuroftalmología", "Clínica de atención primaria"], prerequisitos: ["Fundamentos del glaucoma", "Fundamentos del campo visual"] },
        { nombre: "Técnicas ortópticas y pleópticas", estado: "bloqueado", abre: ["Neuroftalmología", "Clínica de atención primaria"], prerequisitos: ["Fundamentos del estrabismo"] },
        { nombre: "Fisiopatología del polo posterior", estado: "bloqueado", abre: ["Imagenología ocular"], prerequisitos: [] },
        { nombre: "Optometría 1", estado: "bloqueado", abre: ["Técnicas de apoyo para cirugía refractiva", "Optometría 2", "Seminario de grado 1", "Clínica de atención primaria"], prerequisitos: ["Fundamentos del glaucoma", "Fundamentos del estrabismo"] },
        { nombre: "Metodología de la investigación en oftalmología", estado: "bloqueado", abre: ["Seminario de grado 1"], prerequisitos: ["Bioestadística", "Bioética"] }
      ]
    },
    // CUARTO AÑO
    {
      semestre: "7 Semestre",
      ramos: [
        { nombre: "Neuroftalmología", estado: "bloqueado", abre: [], prerequisitos: ["Glaucoma y campo visual", "Técnicas ortópticas y pleópticas"] },
        { nombre: "Técnicas de apoyo para cirugía refractiva", estado: "bloqueado", abre: ["Biometría ocular"], prerequisitos: ["Optometría 1"] },
        { nombre: "Imagenología ocular", estado: "bloqueado", abre: ["Biometría ocular"], prerequisitos: ["Fisiopatología del polo posterior"] },
        { nombre: "Optometría 2", estado: "bloqueado", abre: ["Clínica de atención primaria optométrica", "Baja visión", "Seminario de grado 2"], prerequisitos: ["Optometría 1"] },
        { nombre: "Seminario de grado 1", estado: "bloqueado", abre: ["Seminario de grado 2"], prerequisitos: ["Metodología de la investigación en oftalmología"] },
        { nombre: "Clínica de atención primaria", estado: "bloqueado", abre: ["Análisis clínico integral"], prerequisitos: ["Optometría 1"] }
      ]
    },
    {
      semestre: "8 Semestre",
      ramos: [
        { nombre: "Análisis clínico integral", estado: "bloqueado", abre: ["Clínica médica"], prerequisitos: ["Clínica de atención primaria"] },
        { nombre: "Biometría ocular", estado: "bloqueado", abre: [], prerequisitos: ["Técnicas de apoyo para cirugía refractiva", "Imagenología ocular"] },
        { nombre: "Clínica de atención primaria optométrica", estado: "bloqueado", abre: ["Clínica médica", "Gestión y proyecto de intervención comunitaria"], prerequisitos: ["Optometría 2"] },
        { nombre: "Baja visión", estado: "bloqueado", abre: [], prerequisitos: ["Optometría 2"] },
        { nombre: "Seminario de grado 2", estado: "bloqueado", abre: ["Electivo de formación profesional 1", "Electivo de formación profesional 2"], prerequisitos: ["Seminario de grado 1"] }
      ]
    },
    // QUINTO AÑO
    {
      semestre: "9 Semestre",
      ramos: [
        { nombre: "Clínica médica", estado: "bloqueado", abre: [], prerequisitos: ["Análisis clínico integral", "Clínica de atención primaria optométrica"] },
        { nombre: "Gestión y proyecto de intervención comunitaria", estado: "bloqueado", abre: [], prerequisitos: ["Clínica de atención primaria optométrica"] },
        { nombre: "Electivo de formación profesional 1", estado: "bloqueado", abre: [], prerequisitos: ["Seminario de grado 2"] },
        { nombre: "Electivo de formación profesional 2", estado: "bloqueado", abre: [], prerequisitos: ["Seminario de grado 2"] }
      ]
    },
    {
      semestre: "10 Semestre",
      ramos: [
        { nombre: "Actividad de titulación: internado", estado: "bloqueado", abre: [], prerequisitos: ["Electivo de formación profesional 1", "Electivo de formación profesional 2"] }
      ]
    }
  ];
}
const STORAGE_KEY = "mallaTMEstado";
const contenedor = document.getElementById("contenedor-semestres");
const progresoElem = document.getElementById("progreso");

let malla = null;
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

function init() {
  const estadoGuardado = cargarEstadoGuardado();
  if (estadoGuardado) {
    malla = estadoGuardado;
  } else {
    malla = cargarMallaJSON();
  }
  crearMapaRamos();
  actualizarDesbloqueos();  // <--- AQUÍ, justo antes de cargarMallaUI()
  cargarMallaUI();
}

init();
