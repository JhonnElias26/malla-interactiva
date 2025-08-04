// Datos malla curricular con prerrequisitos y "abre"
const malla = [
  {
    semestre: "1 Semestre",
    ramos: [
      { nombre: "Anatomia general", abre: ["Fisiologia humana", "Anatomia del sistema visual"], prerequisitos: [], estado: "desbloqueado" },
      { nombre: "Biologia Humana e Histologia", abre: ["Fisiologia humana", "Anatomia del sistema visual"], prerequisitos: [], estado: "desbloqueado" },
      { nombre: "Quimica general y organica", abre: ["Bioquimica"], prerequisitos: [], estado: "desbloqueado" },
      { nombre: "Matematicas", abre: ["Fisica general"], prerequisitos: [], estado: "desbloqueado" },
      { nombre: "Introduccion a la tecnologia medica en oftalmologia", abre: ["Interaccion humana y sociocultural"], prerequisitos: [], estado: "desbloqueado" },
      { nombre: "Expresion oral y escrita", abre: ["Interaccion humana y sociocultural"], prerequisitos: [], estado: "desbloqueado" },
      { nombre: "Taller de ingles", abre: ["Ingles general"], prerequisitos: [], estado: "desbloqueado" }
    ]
  },
  {
    semestre: "2 Semestre",
    ramos: [
      { nombre: "Fisiologia humana", abre: ["Fisiopatologia humana", "Enfermeria basica"], prerequisitos: ["Anatomia general", "Biologia Humana e Histologia"], estado: "bloqueado" },
      { nombre: "Anatomia del sistema visual", abre: [], prerequisitos: ["Anatomia general", "Biologia Humana e Histologia"], estado: "bloqueado" },
      { nombre: "Bioquimica", abre: ["Farmacologia general"], prerequisitos: ["Quimica general y organica"], estado: "bloqueado" },
      { nombre: "Fisica general", abre: ["Fisica optica"], prerequisitos: ["Matematicas"], estado: "bloqueado" },
      { nombre: "Ingles general", abre: ["Ingles tecnico"], prerequisitos: ["Taller de ingles"], estado: "bloqueado" },
      { nombre: "Interaccion humana y sociocultural", abre: ["Psicologia de la salud"], prerequisitos: ["Introduccion a la tecnologia medica en oftalmologia", "Expresion oral y escrita"], estado: "bloqueado" }
    ]
  },
  {
    semestre: "3 Semestre",
    ramos: [
      { nombre: "Fisiopatologia humana", abre: ["Microbiologia e inmunologia", "Semiologia del sistema visual"], prerequisitos: ["Fisiologia humana"], estado: "bloqueado" },
      { nombre: "Enfermeria basica", abre: ["Farmacologia ocular"], prerequisitos: ["Fisiologia humana"], estado: "bloqueado" },
      { nombre: "Farmacologia general", abre: ["Farmacologia ocular"], prerequisitos: ["Bioquimica"], estado: "bloqueado" },
      { nombre: "Fisica optica", abre: ["Fundamentos de la oftalmologia"], prerequisitos: ["Fisica general"], estado: "bloqueado" },
      { nombre: "Psicologia de la salud", abre: ["Salud publica"], prerequisitos: ["Interaccion humana y sociocultural"], estado: "bloqueado" },
      { nombre: "Ingles tecnico", abre: [], prerequisitos: ["Ingles general"], estado: "bloqueado" }
    ]
  },
  {
    semestre: "4 Semestre",
    ramos: [
      { nombre: "Microbiologia e inmunologia", abre: [], prerequisitos: ["Fisiopatologia humana"], estado: "bloqueado" },
      { nombre: "Semiologia del sistema visual", abre: ["Fundamentos del glaucoma", "Fundamentos del estrabismo"], prerequisitos: ["Fisiopatologia humana"], estado: "bloqueado" },
      { nombre: "Farmacologia ocular", abre: ["Fundamentos del glaucoma"], prerequisitos: ["Farmacologia general", "Enfermeria basica"], estado: "bloqueado" },
      { nombre: "Fundamentos de la oftalmologia", abre: ["Fundamentos del estrabismo", "Fundamentos del campo visual"], prerequisitos: ["Fisica optica"], estado: "bloqueado" },
      { nombre: "Salud publica", abre: ["Gestion y liderazgo", "Bioestadistica"], prerequisitos: ["Psicologia de la salud"], estado: "bloqueado" },
      { nombre: "Electivo de formacion general", abre: [], prerequisitos: [], estado: "bloqueado" }
    ]
  },
  {
    semestre: "5 Semestre",
    ramos: [
      { nombre: "Fundamentos del glaucoma", abre: ["Glaucoma y campo visual", "Optometria 1"], prerequisitos: ["Semiologia del sistema visual", "Farmacologia ocular"], estado: "bloqueado" },
      { nombre: "Fundamentos del estrabismo", abre: ["Tecnicas ortopticas y pleopticas", "Optometria 1"], prerequisitos: ["Semiologia del sistema visual", "Fundamentos de la oftalmologia"], estado: "bloqueado" },
      { nombre: "Fundamentos del campo visual", abre: ["Glaucoma y campo visual"], prerequisitos: ["Fundamentos de la oftalmologia"], estado: "bloqueado" },
      { nombre: "Gestion y liderazgo", abre: [], prerequisitos: [], estado: "bloqueado" },
      { nombre: "Bioestadistica", abre: ["Metodologia de la investigacion en oftalmologia"], prerequisitos: ["Salud publica"], estado: "bloqueado" },
      { nombre: "Bioetica", abre: ["Metodologia de la investigacion en oftalmologia"], prerequisitos: [], estado: "bloqueado" }
    ]
  },
  {
    semestre: "6 Semestre",
    ramos: [
      { nombre: "Glaucoma y campo visual", abre: ["Neuroftalmologia", "Clinica de atencion primaria"], prerequisitos: ["Fundamentos del glaucoma", "Fundamentos del campo visual"], estado: "bloqueado" },
      { nombre: "Tecnicas ortopticas y pleopticas", abre: ["Neuroftalmologia", "Clinica de atencion primaria"], prerequisitos: ["Fundamentos del estrabismo"], estado: "bloqueado" },
      { nombre: "Fisiopatologia del polo posterior", abre: ["Imagenologia ocular"], prerequisitos: [], estado: "bloqueado" },
      { nombre: "Optometria 1", abre: ["Tecnicas de apoyo para cirugia refractiva", "Optometria 2", "Seminario de grado 1", "Clinica de atencion primaria"], prerequisitos: ["Fundamentos del glaucoma", "Fundamentos del estrabismo"], estado: "bloqueado" },
      { nombre: "Metodologia de la investigacion en oftalmologia", abre: ["Seminario de grado 1"], prerequisitos: ["Bioestadistica", "Bioetica"], estado: "bloqueado" }
    ]
  },
  {
    semestre: "7 Semestre",
    ramos: [
      { nombre: "Neuroftalmologia", abre: [], prerequisitos: ["Glaucoma y campo visual", "Tecnicas ortopticas y pleopticas"], estado: "bloqueado" },
      { nombre: "Tecnicas de apoyo para cirugia refractiva", abre: ["Biometria ocular"], prerequisitos: ["Optometria 1"], estado: "bloqueado" },
      { nombre: "Imagenologia ocular", abre: ["Biometria ocular"], prerequisitos: ["Fisiopatologia del polo posterior"], estado: "bloqueado" },
      { nombre: "Optometria 2", abre: ["Clinica de atencion primaria optometrica", "Baja vision", "Seminario de grado 2"], prerequisitos: ["Optometria 1"], estado: "bloqueado" },
      { nombre: "Seminario de grado 1", abre: ["Seminario de grado 2"], prerequisitos: ["Metodologia de la investigacion en oftalmologia"], estado: "bloqueado" },
      { nombre: "Clinica de atencion primaria", abre: ["Analisis clinico integral"], prerequisitos: ["Optometria 1"], estado: "bloqueado" }
    ]
  },
  {
    semestre: "8 Semestre",
    ramos: [
      { nombre: "Analisis clinico integral", abre: ["Clinica medica"], prerequisitos: ["Clinica de atencion primaria"], estado: "bloqueado" },
      { nombre: "Biometria ocular", abre: [], prerequisitos: ["Tecnicas de apoyo para cirugia refractiva", "Imagenologia ocular"], estado: "bloqueado" },
      { nombre: "Clinica de atencion primaria optometrica", abre: ["Clinica medica", "Gestion y proyecto de intervencion comunitaria"], prerequisitos: ["Optometria 2"], estado: "bloqueado" },
      { nombre: "Baja vision", abre: [], prerequisitos: ["Optometria 2"], estado: "bloqueado" },
      { nombre: "Seminario de grado 2", abre: ["Electivo de formacion profesional 1", "Electivo de formacion profesional 2"], prerequisitos: ["Seminario de grado 1"], estado: "bloqueado" }
    ]
  },
  {
    semestre: "9 Semestre",
    ramos: [
      { nombre: "Clinica medica", abre: [], prerequisitos: [], estado: "bloqueado" },
      { nombre: "Gestion y proyecto de intervencion comunitaria", abre: [], prerequisitos: [], estado: "bloqueado" },
      { nombre: "Electivo de formacion profesional 1", abre: [], prerequisitos: [], estado: "bloqueado" },
      { nombre: "Electivo de formacion profesional 2", abre: [], prerequisitos: [], estado: "bloqueado" }
    ]
  },
  {
    semestre: "10 Semestre",
    ramos: [
      { nombre: "Actividad de titulacion: internado", abre: [], prerequisitos: [], estado: "bloqueado" }
    ]
  }
];

// Mapa rápido de ramos
const mapaRamos = new Map();

const contenedor = document.getElementById("contenedor-semestres");
const progresoElem = document.getElementById("progreso");

// Cargar estado guardado
function cargarEstado() {
  const json = localStorage.getItem("estadoMalla");
  if (!json) return null;
  try {
    const estado = JSON.parse(json);
    return estado;
  } catch {
    return null;
  }
}

// Guardar estado
function guardarEstado() {
  localStorage.setItem("estadoMalla", JSON.stringify(malla));
}

// Crear mapa para acceso rápido
function crearMapa() {
  mapaRamos.clear();
  malla.forEach(semestre => {
    semestre.ramos.forEach(ramo => {
      mapaRamos.set(ramo.nombre, ramo);
    });
  });
}

// Actualizar desbloqueos según prerrequisitos
function actualizarDesbloqueos() {
  // Ramo aprobado
  const aprobados = new Set();
  malla.forEach(s => s.ramos.forEach(r => {
    if (r.estado === "aprobado") aprobados.add(r.nombre);
  }));

  let cambio = false;

  malla.forEach(s => s.ramos.forEach(r => {
    if (r.estado === "bloqueado") {
      // Si no tiene prerequisitos, desbloquear
      if (!r.prerequisitos || r.prerequisitos.length === 0) {
        r.estado = "desbloqueado";
        cambio = true;
      } else {
        // Desbloquear si todos prerequisitos están aprobados
        if (r.prerequisitos.every(pr => aprobados.has(pr))) {
          r.estado = "desbloqueado";
          cambio = true;
        }
      }
    }
  }));

  if (cambio) {
    guardarEstado();
    renderizar();
  }
