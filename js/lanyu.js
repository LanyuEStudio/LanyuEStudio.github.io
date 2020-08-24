function addEspecialidad(nombre, porcentaje) {
    const template = `<div class="progress-container progress-primary"><span class="progress-badge">${nombre}</span>
      <div class="progress">
        <div class="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10"
          data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0"
          aria-valuemax="100" style="width: ${porcentaje}%;"></div><span class="progress-value">${porcentaje}%</span>
      </div>
    </div>`;
  const capaEspecialidades = document.querySelector('#skill .row');
  const especialidad = document.createElement('div');
  especialidad.classList.add('col-md-6');
  especialidad.innerHTML = template;
  capaEspecialidades.appendChild(especialidad);
}

const especialidades = [
    { nombre: "Videojuegos", porcentaje: 85 },
    { nombre: "API RESTful", porcentaje: 95 },
    { nombre: "Alojamiento Web", porcentaje: 90 },
    { nombre: "Infraestructuras ágiles", porcentaje: 80 },
    { nombre: "Integración Open Source", porcentaje: 90 },
    { nombre: "Diseño gráfico", porcentaje: 80 }
];

especialidades.sort((e1, e2) => e2.porcentaje - e1.porcentaje).forEach(e => addEspecialidad(e.nombre, e.porcentaje));