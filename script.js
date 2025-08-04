document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('contenedor-malla');
  const avance = document.getElementById('avance');
  let malla = [];
  let progreso = JSON.parse(localStorage.getItem('malla-aprobados') || '{}');

  fetch('malla.json')
    .then(res => res.json())
    .then(data => {
      malla = data.semestres;
      renderMalla();
    });

  function renderMalla() {
    contenedor.innerHTML = '';
    let total = 0, aprobados = 0;

    malla.forEach(semestre => {
      const col = document.createElement('div');
      col.className = 'semestre';
      col.innerHTML = `<h2>${semestre.nombre}</h2>`;

      semestre.ramos.forEach(ramo => {
        const div = document.createElement('div');
        div.className = 'ramo';
        div.textContent = ramo.nombre;

        total++;
        const aprobado = progreso[ramo.nombre];
        const desbloqueado = ramo.prerrequisitos.every(pr => progreso[pr]);

        if (aprobado) {
          div.classList.add('aprobado');
          aprobados++;
        } else if (desbloqueado || ramo.prerrequisitos.length === 0) {
          div.classList.add('desbloqueado');
        } else {
          div.classList.add('bloqueado');
        }

        div.addEventListener('click', () => {
          if (div.classList.contains('desbloqueado') || div.classList.contains('aprobado')) {
            progreso[ramo.nombre] = !progreso[ramo.nombre];
            localStorage.setItem('malla-aprobados', JSON.stringify(progreso));
            renderMalla();
          }
        });

        col.appendChild(div);
      });

      contenedor.appendChild(col);
    });

    const porcentaje = Math.round((aprobados / total) * 100);
    avance.textContent = `Avance: ${porcentaje}%`;
  }
});
