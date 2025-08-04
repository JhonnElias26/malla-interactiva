const ramos = [
  { nombre: "Anatomia general", desbloquea: ["Fisiologia humana", "Anatomia del sistema visual"] },
  { nombre: "Biologia Humana e Histologia", desbloquea: ["Fisiologia humana", "Anatomia del sistema visual"] },
  { nombre: "Quimica general y organica", desbloquea: ["Bioquimica"] },
  { nombre: "Matematicas", desbloquea: ["Fisica general"] },
  { nombre: "Introduccion a la tecnologia medica en oftalmologia", desbloquea: ["Interaccion humana y sociocultural"] },
  { nombre: "Expresion oral y escrita", desbloquea: ["Interaccion humana y sociocultural"] },
  { nombre: "Taller de ingles", desbloquea: ["Ingles general"] },
  { nombre: "Fisiologia humana", desbloquea: ["Fisiopatologia humana", "Enfermeria basica"] },
  { nombre: "Anatomia del sistema visual", desbloquea: [] },
  { nombre: "Bioquimica", desbloquea: ["Farmacologia general"] },
  { nombre: "Fisica general", desbloquea: ["Fisica optica"] },
  { nombre: "Ingles general", desbloquea: ["Ingles tecnico"] },
  { nombre: "Interaccion humana y sociocultural", desbloquea: ["Psicologia de la salud"] },
  { nombre: "Fisiopatologia humana", desbloquea: ["Microbiologia e inmunologia", "Semiologia del sistema visual"] },
  { nombre: "Enfermeria basica", desbloquea: ["Farmacologia ocular"] },
  { nombre: "Farmacologia general", desbloquea: ["Farmacologia ocular"] },
  { nombre: "Fisica optica", desbloquea: ["Fundamentos de la oftalmologia"] },
  { nombre: "Psicologia de la salud", desbloquea: ["Salud publica"] },
  { nombre: "Ingles tecnico", desbloquea: [] },
  { nombre: "Microbiologia e inmunologia", desbloquea: [] },
  { nombre: "Semiologia del sistema visual", desbloquea: ["Fundamentos del glaucoma", "Fundamentos del estrabismo"] },
  { nombre: "Farmacologia ocular", desbloquea: ["Fundamentos del glaucoma"] },
  { nombre: "Fundamentos de la oftalmologia", desbloquea: ["Fundamentos del estrabismo", "Fundamentos del campo visual"] },
  { nombre: "Salud publica", desbloquea: ["Gestion y liderazgo", "Bioestadistica"] },
  { nombre: "Electivo de formacion general", desbloquea: [] },
  { nombre: "Fundamentos del glaucoma", desbloquea: ["Glaucoma y campo visual", "Optometria 1"] },
  { nombre: "Fundamentos del estrabismo", desbloquea: ["Tecnicas ortopticas y pleopticas", "Optometria 1"] },
  { nombre: "Fundamentos del campo visual", desbloquea: ["Glaucoma y campo visual"] },
  { nombre: "Gestion y liderazgo", desbloquea: [] },
  { nombre: "Bioestadistica", desbloquea: ["Metodologia de la investigacion en oftalmologia"] },
  { nombre: "Bioetica", desbloquea: ["Metodologia de la investigacion en oftalmologia"] },
  { nombre: "Glaucoma y campo visual", desbloquea: ["Neuroftalmologia", "Clinica de atencion primaria"] },
  { nombre: "Tecnicas ortopticas y pleopticas", desbloquea: ["Neuroftalmologia", "Clinica de atencion primaria"] },
  { nombre: "Fisiopatologia del polo posterior", desbloquea: ["Imagenologia ocular"] },
  { nombre: "Optometria 1", desbloquea: ["Tecnicas de apoyo para cirugia refractiva", "Optometria 2", "Seminario de grado 1", "Clinica de atencion primaria"] },
  { nombre: "Metodologia de la investigacion en oftalmologia", desbloquea: ["Seminario de grado 1"] },
  { nombre: "Neuroftalmologia", desbloquea: [] },
  { nombre: "Tecnicas de apoyo para cirugia refractiva", desbloquea: ["Biometria ocular"] },
  { nombre: "Imagenologia ocular", desbloquea: ["Biometria ocular"] },
  { nombre: "Optometria 2", desbloquea: ["Clinica de atencion primaria optometrica", "Baja vision", "Seminario de grado 2"] },
  { nombre: "Seminario de grado 1", desbloquea: ["Seminario de grado 2"] },
  { nombre: "Clinica de atencion primaria", desbloquea: ["Analisis clinico integral"] },
  { nombre: "Analisis clinico integral", desbloquea: ["Clinica medica"] },
  { nombre: "Biometria ocular", desbloquea: [] },
  { nombre: "Clinica de atencion primaria optometrica", desbloquea: ["Clinica medica", "Gestion y proyecto de intervencion comunitaria"] },
  { nombre: "Baja vision", desbloquea: [] },
  { nombre: "Seminario de grado 2", desbloquea: ["Electivo de formacion profesional 1", "Electivo de formacion profesional 2"] },
  { nombre: "Clinica medica", desbloquea: [] },
  { nombre: "Gestion y proyecto de intervencion  comunitaria", desbloquea: [] },
  { nombre: "Electivo de formacion profesional 1", desbloquea: [] },
  { nombre: "Electivo de formacion profesional 2", desbloquea: [] },
  { nombre: "Actividad de titulacion: internado", desbloquea: [] }
];

const estado = {};

function crearMalla() {
  const contenedor = document.getElementById("malla");
  ramos.forEach(ramo => {
    estado[ramo.nombre] = { aprobado: false, desbloqueado: false };
    const div = document.createElement("div");
    div.textContent = ramo.nombre;
    div.className = "ramo";
    div.id = ramo.nombre;
    div.onclick = () => aprobarRamo(ramo.nombre);
    contenedor.appendChild(div);
  });
  desbloquearIniciales();
}

function desbloquearIniciales() {
  // Desbloquear ramos sin prerequisitos
  const conRequisitos = new Set(ramos.flatMap(r => r.desbloquea));
  ramos.forEach(r => {
    if (!conRequisitos.has(r.nombre)) desbloquear(r.nombre);
  });
}

function desbloquear(nombre) {
  if (!estado[nombre].desbloqueado) {
    estado[nombre].desbloqueado = true;
    const div = document.getElementById(nombre);
    div.classList.add("desbloqueado");
    div.style.cursor = "pointer";
  }
}

function aprobarRamo(nombre) {
  if (!estado[nombre].desbloqueado || estado[nombre].aprobado) return;

  estado[nombre].aprobado = true;
  const div = document.getElementById(nombre);
  div.classList.add("aprobado");

  const ramo = ramos.find(r => r.nombre === nombre);
  ramo.desbloquea.forEach(desbloquear);
}

crearMalla();
