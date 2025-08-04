let estructura = {};
let estado = {};

async function cargarMalla() {
  const res = await fetch('malla.json');
  estructura = await res.json();

  const container = document.getElementById('malla');
  for (const semestre in estructura) {
    const bloque = document.createElement('div');
    bloque.className = 'semestre';
    bloque.innerHTML = `<h2>${semestre}</h2><div class="ramos" id="bloque-${semestre}"></div>`;
    container.appendChild(bloque);

    estructura[semestre].forEach(ramo => {
      estado[ramo.nombre] = {
        aprobado: false,
        desbloqueado: false,
        desbloquea: ramo.desbloquea
      };

      const div = document.createElement('div');
      div.textContent = ramo.nombre;
      div.className = 'ramo';
      div.id = `ramo-${ramo.nombre}`;
      div.onclick = () => aprobarRamo(ramo.nombre);
      document.getElementById(`bloque-${semestre}`).appendChild(div);
    });
  }

  cargarProgresoGuardado();
  desbloquearRamosSinRequisitos();
  actualizarProgreso();
}

function desbloquearRamosSinRequisitos() {
  const todos = Object.keys(estado);
  const desbloqueados = new Set();

  todos.forEach(r => {
    estado[r].desbloquea.forEach(d => desbloqueados.add(d));
  });

  todos.forEach(r => {
    if (!desbloqueados.has(r)) desbloquear(r);
  });
}

function desbloquear(nombre) {
  if (!estado[nombre].desbloqueado) {
    estado[nombre].desbloqueado = true;
    const div = document.getElementById(`ramo-${nombre}`);
    div.classList.add('desbloqueado');
  }
}

function aprobarRamo(nombre) {
  if (!estado[nombre].desbloqueado || estado[nombre].aprobado) return;

  estado[nombre].aprobado = true;
  const div = document.getElementById(`ramo-${nombre}`);
  div.classList.remove('desbloqueado');
  div.classList.add('aprobado');

  estado[nombre].desbloquea.forEach(desbloquear);
  guardarProgreso();
  actualizarProgreso();
}

function guardarProgreso() {
  localStorage.setItem('estadoMalla', JSON.stringify(estado));
}

function cargarProgresoGuardado() {
  const saved = localStorage.getItem('estadoMalla');
  if (!saved) return;

  const cargado = JSON.parse(saved);
  for (const nombre in cargado) {
    if (!estado[nombre]) continue;
    estado[nombre].aprobado = cargado[nombre].aprobado;
    estado[nombre].desbloqueado = cargado[nombre].desbloqueado;
    const div = document.getElementById(`ramo-${nombre}`);
    if (estado[nombre].aprobado) {
      div.classList.add('aprobado');
    } else if (estado[nombre].desbloqueado) {
      div.classList.add('desbloqueado');
    }
  }
}

function actualizarProgreso() {
  const total = Object.keys(estado).length;
  const aprobados = Object.values(estado).filter(e => e.aprobado).length;
  const porcentaje = Math.round((aprobados / total) * 100);
  document.getElementById('progreso').textContent = `Progreso: ${porcentaje}%`;
}

cargarMalla();
