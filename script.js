// JSON completo con malla curricular (puedes extraerlo a archivo externo si quieres)
const malla = [
  {
    semestre: "1 Semestre",
    ramos: [
      { nombre: "Anatomía general", estado: "desbloqueado", abre: ["Fisiología humana", "Anatomía del sistema visual"] },
      { nombre: "Biología Humana e Histología", estado: "desbloqueado", abre: ["Fisiología humana", "Anatomía del sistema visual"] },
      { nombre: "Química general y orgánica", estado: "desbloqueado", abre: ["Bioquímica"] },
      { nombre: "Matemáticas", estado: "desbloqueado", abre: ["Física general"] },
      { nombre: "Introducción a la tecnología médica en oftalmología", estado: "desbloqueado", abre: ["Interacción humana y sociocultural"] },
      { nombre: "Expresión oral y escrita", estado: "desbloqueado", abre: ["Interacción humana y sociocultural"] },
      { nombre: "Taller de inglés", estado: "desbloqueado", abre: ["Inglés general"] }
    ]
  },
  {
    semestre: "2 Semestre",
    ramos: [
      { nombre: "Fisiología humana", estado: "bloqueado", abre: ["Fisiopatología humana", "Enfermería básica"] },
      { nombre: "Anatomía del sistema visual", estado: "bloqueado", abre: [] },
      { nombre: "Bioquímica", estado: "bloqueado", abre: ["Farmacología general"] },
      { nombre: "Física general", estado: "bloqueado", abre: ["Física óptica"] },
      { nombre: "Inglés general", estado: "bloqueado", abre: ["Inglés técnico"] },
      { nombre: "Interacción humana y sociocultural", estado: "bloqueado", abre: ["Psicología de la salud"] }
    ]
  },
  {
    semestre: "3 Semestre",
    ramos: [
      { nombre: "Fisiopatología humana", estado: "bloqueado", abre: ["Microbiología e inmunología", "Semiología del sistema visual"] },
      { nombre: "Enfermería básica", estado: "bloqueado", abre: ["Farmacología ocular"] },
      { nombre: "Farmacología general", estado: "bloqueado", abre: ["Farmacología ocular"] },
      { nombre: "Física óptica", estado: "bloqueado", abre: ["Fundamentos de la oftalmología"] },
      { nombre: "Psicología de la salud", estado: "bloqueado", abre: ["Salud pública"] },
      { nombre: "Inglés técnico", estado: "bloqueado", abre: [] }
    ]
  },
  {
    semestre: "4 Semestre",
    ramos: [
      { nombre: "Microbiología e inmunología", estado: "bloqueado", abre: [] },
      { nombre: "Semiología del sistema visual", estado: "bloqueado", abre: ["Fundamentos del glaucoma", "Fundamentos del estrabismo"] },
      { nombre: "Farmacología ocular", estado: "bloqueado", abre: ["Fundamentos del glaucoma"] },
      { nombre: "Fundamentos de la oftalmología", estado: "bloqueado", abre: ["Fundamentos del estrabismo", "Fundamentos del campo visual"] },
      { nombre: "Salud pública", estado: "bloqueado", abre: ["Gestión y liderazgo", "Bioestadística"] },
      { nombre: "Electivo de formación general", estado: "bloqueado", abre: [] }
    ]
  },
  {
    semestre: "5 Semestre",
    ramos: [
      { nombre: "Fundamentos del glaucoma", estado: "bloqueado", abre: ["Glaucoma y campo visual", "Optometría 1"] },
      { nombre: "Fundamentos del estrabismo", estado: "bloqueado", abre: ["Técnicas ortópticas y pleópticas", "Optometría 1"] },
      { nombre: "Fundamentos del campo visual", estado: "bloqueado", abre: ["Glaucoma y campo visual"] },
      { nombre: "Gestión y liderazgo", estado: "bloqueado", abre: [] },
      { nombre: "Bioestadística", estado: "bloqueado", abre: ["Metodología de la investigación en oftalmología"] },
      { nombre: "Bioética", estado: "bloqueado", abre: ["Metodología de la investigación en oftalmología"] }
    ]
  },
  {
    semestre: "6 Semestre",
    ramos: [
      { nombre: "Glaucoma y campo visual", estado: "bloqueado", abre: ["Neuroftalmología", "Clínica de atención primaria"] },
      { nombre: "Técnicas ortópticas y pleópticas", estado: "bloqueado", abre: ["Neuroftalmología", "Clínica de atención primaria"] },
      { nombre: "Fisiopatología del polo posterior", estado: "bloqueado", abre: ["Imagenología ocular"] },
      { nombre: "Optometría 1", estado: "bloqueado", abre: ["Técnicas de apoyo para cirugía refractiva", "Optometría 2", "Seminario de grado 1", "Clínica de atención primaria"] },
      { nombre: "Metodología de la investigación en oftalmología", estado: "bloqueado", abre: ["Seminario de grado 1"] }
    ]
  },
  {
    semestre: "7 Semestre",
    ramos: [
      { nombre: "Neuroftalmología", estado: "bloqueado", abre: [] },
      { nombre: "Técnicas de apoyo para cirugía refractiva", estado: "bloqueado", abre: ["Biometría ocular"] },
      { nombre: "Imagenología ocular", estado: "bloqueado", abre: ["Biometría ocular"] },
      { nombre: "Optometría 2", estado: "bloqueado", abre: ["Clínica de atención primaria optométrica", "Baja visión", "Seminario de grado 2"] },
      { nombre: "Seminario de grado 1", estado: "bloqueado", abre: ["Seminario de grado 2"] },
      { nombre: "Clínica de atención primaria", estado: "bloqueado", abre: ["Análisis clínico integral"] }
    ]
  },
  {
    semestre: "8 Semestre",
    ramos: [
      { nombre: "Análisis clínico integral", estado: "bloqueado", abre: ["Clínica médica"] },
      { nombre: "Biometría ocular", estado: "bloqueado", abre: [] },
      { nombre: "Clínica de atención primaria optométrica", estado: "bloqueado", abre: ["Clínica médica", "Gestión y proyecto de intervención comunitaria"] },
      { nombre: "Baja visión", estado: "bloqueado", abre: [] },
      { nombre: "Seminario de grado 2", estado: "bloqueado", abre: ["Electivo de formación profesional 1", "Electivo de formación profesional 2"] }
    ]
  },
  {
    semestre: "9 Semestre",
    ramos: [
      { nombre: "Clínica médica", estado: "bloqueado", abre: [] },
      { nombre: "Gestión y proyecto de intervención comunitaria", estado: "bloqueado", abre: [] },
      { nombre: "Electivo de formación profesional 1", estado: "bloqueado", abre: [] },
      { nombre: "Electivo de formación profesional 2", estado: "bloqueado", abre: [] }
    ]
  },
  {
    semestre: "10 Semestre",
    ramos: [
      { nombre: "Actividad de titulación: internado", estado: "bloqueado", abre: [] }
    ]
  }
];

// Referencia al contenedor principal
const contenedor = document.getElementById("contenedor-semestres");
const progresoElem = document.getElementById("progreso");

// Función para crear el HTML de la malla
function cargarMalla() {
  contenedor.innerHTML = "";

  malla.forEach((semestre) => {
    // Crear contenedor semestre
    const divSemestre = document.createElement("div");
    divSemestre.classList.add("semestre");

    // Título semestre
    const h2 = document.createElement("h2");
    h2.textContent = semestre.semestre;
    divSemestre.appendChild(h2);

    // Lista de ramos
    const ul = document.createElement("ul");
    ul.classList.add("lista-ramos");

    semestre.ramos.forEach((ramo) => {
      const li = document.createElement("li");
      li.classList.add("ramo", ramo.estado);
      li.textContent = ramo.nombre;

      // Solo ramos desbloqueados o aprobados pueden ser clickeables
      if (ramo.estado !== "bloqueado") {
        li.style.cursor = "pointer";

        // Al hacer click alternamos aprobado / desbloqueado
        li.addEventListener("click", () => {
          if (ramo.estado === "desbloqueado") {
            ramo.estado = "aprobado";
            li.classList.remove("desbloqueado");
            li.classList.add("aprobado");
          } else if (ramo.estado === "aprobado") {
            ramo.estado = "desbloqueado";
            li.classList.remove("aprobado");
            li.classList.add("desbloqueado");
          }

          actualizarProgreso();
          actualizarDesbloqueos();
        });
      }

      ul.appendChild(li);
    });

    divSemestre.appendChild(ul);
    contenedor.appendChild(divSemestre);
  });

  actualizarProgreso();
  actualizarDesbloqueos();
}

// Calcula y actualiza el progreso total
function actualizarProgreso() {
  let totalRamos = 0;
  let aprobados = 0;

  malla.forEach((semestre) => {
    semestre.ramos.forEach((ramo) => {
      totalRamos++;
      if (ramo.estado === "aprobado") aprobados++;
    });
  });

  const porcentaje = totalRamos ? Math.round((aprobados / totalRamos) * 100) : 0;
  progresoElem.textContent = `Progreso: ${porcentaje}%`;
}

// Actualiza los estados desbloqueando ramos según prerrequisitos aprobados
function actualizarDesbloqueos() {
  // Crear un Set con todos los nombres de ramos aprobados para fácil búsqueda
  const aprobadosSet = new Set();
  malla.forEach((semestre) => {
    semestre.ramos.forEach((ramo) => {
      if (ramo.estado === "aprobado") aprobadosSet.add(ramo.nombre);
    });
  });

  // Para cada ramo bloqueado, verificar si todos sus prerrequisitos están aprobados
  malla.forEach((semestre) => {
    semestre.ramos.forEach((ramo) => {
      if (ramo.estado === "bloqueado") {
        // Si no tiene prerrequisitos, desbloquearlo (por si acaso)
        if (ramo.abre.length === 0) {
          ramo.estado = "desbloqueado";
        } else {
          // Verificar si todas las asignaturas que abren el ramo están aprobadas
          const prerequisitosAprobados = semestre.ramos.every(() => true); // para no filtrar aquí
          const todosAbrenAprobados = ramo.abre.every((prerreq) =>
            aprobadosSet.has(prerreq)
          );

          if (todosAbrenAprobados) {
            ramo.estado = "desbloqueado";
          }
        }
      }
    });
  });

  // Volver a renderizar para actualizar estilos y eventos
  renderizarEstados();
}

// Actualiza las clases CSS de los ramos para reflejar sus estados
function renderizarEstados() {
  // Recorrer todas las listas y li para actualizar clases según estado actual
  const liElems = document.querySelectorAll("#contenedor-semestres .ramo");

  liElems.forEach((li) => {
    // Buscar el ramo correspondiente en malla
    const nombre = li.textContent;
    let ramoEncontrado = null;
    outer: for (const semestre of malla) {
      for (const ramo of semestre.ramos) {
        if (ramo.nombre === nombre) {
          ramoEncontrado = ramo;
          break outer;
        }
      }
    }

    if (ramoEncontrado) {
      li.classList.remove("bloqueado", "desbloqueado", "aprobado");
      li.classList.add(ramoEncontrado.estado);
      // Cambiar cursor
      li.style.cursor =
        ramoEncontrado.estado === "bloqueado" ? "not-allowed" : "pointer";
    }
  });
}

// Inicializamos la malla al cargar la página
