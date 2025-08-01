// Componentes

// Service
Vue.component('service', {
  props: ['service'],
  template:
  `<div class="card">
    <div class="row">
      <div class="col-md-3 bg-primary px-auto" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
        <div class="card-body cc-experience-header">
          <div class="h5">{{ service.title}}</div>
          <div class="service-icon text-center"><i :class="service.class" aria-hidden="true"></i></div>
        </div>
      </div>
      <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
        <div class="card-body">
          <div class="h5">{{ service.header }}</div>
          <p v-html="service.body"></p>
        </div>
      </div>
    </div>
  </div>`
});

// Portfolio
Vue.component('portfolio-tab', {
  props: ['tab', 'index'],
  template:
  `<div class="tab-pane" :id="tab.id" :class="{ active: index === 0 }">
    <div class="ml-auto mr-auto">
      <div class="row">
        <div class="col-md-6">
          <slot name="left"></slot>
        </div>
        <div class="col-md-6">
          <slot name="right"></slot>
        </div>
      </div>
    </div>
  </div>`
});
Vue.component('tab-icon', {
  props: ['tab', 'index'],
  template:
  `<li class="nav-item" role="tab">
    <a class="nav-link mx-2" data-toggle="tab" :href="'#' + tab.id" :class="{ active: index === 0 }" :aria-label="'Servicio de ' + tab.id">
      <i :class="tab.iconClass" class="icono-en-opcion" aria-hidden="true"></i>
    </a>
  </li>`
});
Vue.component('work', {
  props: ['work'],
  template:
  `<div class="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
    <a :href="work.href">
      <figure class="cc-effect">
        <img class="lazyload img-ajustada" :data-src="work.img.url" :alt="work.img.alt"
             :width="work.img.width" :height="work.img.height" />
        <figcaption>
          <div class="h4">{{ work.name }}</div>
          <p v-html="work.desc"></p>
        </figcaption>
      </figure>
    </a>
  </div>`
});

// Reference
Vue.component('reference-section', {
  props: ['references'],
  template:
  `<div class="container cc-reference">
    <div class="h4 mb-4 text-center title">Referencias</div>
    <div class="card" data-aos="zoom-in">
      <div class="carousel slide" id="cc-Indicators" data-ride="carousel">
        <slot name="indicators"></slot>
        <div class="carousel-inner">
          <slot name="references"></slot>
        </div>
      </div>
    </div>
  </div>`
});
Vue.component('carousel-indicators', {
  props: ['references'],
  template:
  `<ol class="carousel-indicators">
    <li v-for="(ref, index) in references" data-target="#cc-Indicators"
      v-bind:key="index"
      :data-slide-to="index"
      :class="{ active: index === 0 }"></li>
  </ol>`
});
Vue.component('reference', {
  props: ['reference', 'index'],
  template:
  `<div class="carousel-item" :class="{ active: index === 0 }">
    <div class="row">
      <div class="col-lg-4 cc-reference-header">
        <img :data-src="reference.image.url" :alt="reference.image.description" class="lazyload rounded mx-auto d-block img-ajustada"
             :width="reference.image.width" :height="reference.image.height" />
        <div class="h5 pt-2 text-center">{{ reference.name }}</div>
        <p class="category text-center">{{ reference.category }}</p>
      </div>
      <div class="col-lg-8">
        <p v-html="reference.content"></p>
      </div>
    </div>
  </div>`
});

const descripcion = (rs) => {
  return 'Síguenos en ' + rs.name.charAt(0).toUpperCase() + rs.name.slice(1)
}

// RRSS
Vue.component('header-rs', {
  props: ['rs'],
  methods: {
    descripcion: descripcion
  },
  template:
  `<a class="btn btn-default btn-round btn-lg btn-icon d-none d-md-inline-block" rel="tooltip"
    :href="rs.url" :title="descripcion(rs)" :aria-label="descripcion(rs)">
    <i :class="rs.class" class="icono-en-opcion"></i>
  </a>`
});

Vue.component('footer-rs', {
  props: ['rs'],
  methods: {
    descripcion: descripcion
  },
  template:
  `<a class="btn btn-link" :href="rs.url" :title="descripcion(rs)" :aria-label="descripcion(rs)">
    <i :class="rs.class" aria-hidden="true"></i>
  </a>`
});

const tabs = [
  { id: 'transformacion',
    iconClass: 'fa fa-star',
    left: [
      { name: 'Infraestructura Cloud', href: 'https://printoonline.lanyu.es/', img: { url: 'imgs/printoonline.webp', alt: 'Inicio de sitio web PrintOOnline', width: '450', height: '207' }, desc: 'Despliegues en la nube, como nuestro desarrollo para Boxer Publicidad, desplegado en Firebase' },
      { name: 'Prototipado rápido', href: 'https://mini-movistar.lanyu.es/', img: { url: 'imgs/mini-movistar.webp', alt: 'Guía de programas de Movistar+ más fácil de usar', width: '450', height: '359' }, desc: 'A veces sólo importa la experiencia de usuario. Un prototipado rápido te permite hacer test A/B para tomar la mejor decisión: compara nuestra web con la oficial de Movistar+' }
    ],
    right: [
      { name: 'Aplicaciones Web', href: 'https://pockets.lanyu.es', img: { url: 'imgs/pockets.webp', alt: 'Ejemplo de monederos en pockets.lanyu.es', width: '450', height: '302' }, desc: 'Aplicaciones tanto de negocio como personales.<br/>Prueba nuestra webapp de monederos para enseñar a tus hijos con un sistema de recompensas' },
      { name: 'API REST', href: 'https://documenter.getpostman.com/view/9800655/Szme3dFP', img: { url: 'imgs/postman.webp', alt: 'Documentación APIs Lanyu EStudio en Postman', width: '450', height: '188' }, desc: 'Prueba nuestra API RESTful (nivel 3 HATEOAS) sobre Datos Deportivos<span class="d-none d-sm-inline">. Puedes ver las llamadas permitidas en la documentación</span>' }
    ]
  },
  { id: 'desarrollo',
    iconClass: 'fa fa-code',
    left: [
      { name: 'Web Personalizada', href: 'https://fatima.lanyu.es', img: { url: 'imgs/web.webp', alt: 'Inicio de fatimahispania.com', width: '450', height: '404' }, desc: 'Tu web profesional sin preocupaciones.<br/>Visita nuestro trabajo más reciente para bailarinas' },
      { name: 'Compromiso Open Source', href: 'https://github.com/LanyuEStudio', img: { url: 'imgs/opensource.webp', alt: 'Logo de open source initiative y github social coding', width: '450', height: '188' }, desc: 'Explotamos y desarrollamos código abierto (Open Source) <span class="d-none d-sm-inline">para mejorar la velocidad, mantenimiento y precio de desarrollo</span>' }
    ],
    right: [
      { name: 'Integración con Redes Sociales', href: 'https://nomasabusos.github.io/', img: { url: 'imgs/nomasabusos.webp', alt: 'Inicio de nomasabusos.es', width: '450', height: '280' }, desc: 'Crea una "Landing page" de entrada a todas tus redes, rápida y vistosa al compartir en ellas y con tu nombre de dominio personalizado' },
      { name: 'Los mejores blogs', href: 'https://woman-gaze.lanyu.es', img: { url: 'imgs/woman-gaze.webp', alt: 'Blogs fluidos y atractivos para conectar con tu audiencia', width: '450', height: '478' }, desc: 'Navegación fluida y aspecto atractivo para conectar mejor con tu audiencia' }
    ]
  },
  { id: 'videojuegos',
    iconClass: 'fa fa-gamepad',
    left: [
      { name: 'Make Your Adventure', href: 'https://lanyu-estudio.itch.io/make-your-adventure', img: { url: 'imgs/mya.webp', alt: 'Imagen del juego Make Your Adventure (MYA)', width: '315', height: '250' }, desc: 'Convierte tu idea en un videojuego, incluso sin saber programar.<br/>Sólo <strong>Crea, Comparte y Juega</strong>' },
      { name: 'TragaperraJS', href: 'https://lanyu-estudio.itch.io/jslot-machine-tragaperrajs-', img: { url: 'imgs/tragaperrajs.webp', alt: 'Imagen del juego TragaperraJS', width: '315', height: '250' }, desc: 'Una maquina tragaperras adictiva para pasar el rato. Fue el examen de uno de nuestros cursos' }
    ],
    right: [
      { name: 'Followers League', href: 'https://lanyu-estudio.itch.io/followers-league', img: { url: 'imgs/followers-league.webp', alt: 'Imagen del juego Followers League', width: '315', height: '250' }, desc: 'Un juego en masa sobre fútbol (crowd-gaming)' },
      { name: 'Paper Defense', href: 'https://lanyu-estudio.itch.io/paper-defense', img: { url: 'imgs/paper-defense.webp', alt: 'Imagen del juego Paper Defense', width: '315', height: '250' }, desc: 'Un juego de defensa de torre que medirá tu capacidad de escribir a máquina' }
    ]
  },
  { id: 'formacion',
    iconClass: 'fa fa-graduation-cap',
    left: [
      { name: 'Formación personalizada', href: 'mailto:info@lanyu.es', img: { url: 'imgs/classroom.webp', alt: 'Aula con alumnos', width: '450', height: '302' }, desc: 'Para particulares y empresas tanto presenciales como online. <strong>Solicita tu clase con profesor</strong> especializado y dedicado (no sólo entrega de contenidos)' },
      { name: 'Java Fundamentos (JAZZ)', href: 'https://hijosdelspectrum.blogspot.com/p/curso-java-de-zero-zen-jazz-descripcion.html', img: { url: 'imgs/java.webp', alt: 'Logotipo Java', width: '450', height: '250' }, desc: 'Aprende el lenguaje de iniciación a la programación por excelencia hasta alcanzar resultados empresariales' },
      { name: 'Spring Framework', href: 'https://hijosdelspectrum.blogspot.com/p/spring-framework-crear-una-api.html', img: { url: 'imgs/spring.webp', alt: 'Logotipo Spring Framework', width: '450', height: '336' }, desc: 'Aprende el framework de desarrollo de servicios web más extendido a nivel profesional' }
    ],
    right: [
      { name: 'JavaScript', href: 'https://hijosdelspectrum.blogspot.com/p/blog-page.html', img: { url: 'imgs/js.webp', alt: 'Logotipo JavaScript', width: '450', height: '339' }, desc: 'Aprende lo necesario para poder crear aplicaciones con el lenguaje nativo de la web' },
      { name: 'Trucos variados', href: 'https://hijosdelspectrum.blogspot.com/2012/09/css-botones-redondeados-con-brillo.html', img: { url: 'https://cdn.pixabay.com/photo/2020/03/05/17/35/tips-4905013_960_720.jpg', alt: 'Tips and Tricks' }, desc: 'Trucos variados sobre programación, software, herramientas, etc...<br/><strong>Permanece conectado!</strong>' }
    ]
  }
];

const services = [
  { title: 'Impulsa tu negocio', header: 'Asesores en transformación digital', class: 'fa fa-star', body: 'Nos dedicamos a trabajar en tu proceso de toma de decisiones para conseguir que tu organización sea una <strong>referencia en el sector</strong>. Ofrecemos una <strong>solución integral</strong> porque podemos colaborar en la elaboración de tu estrategia de comunicación y de desarrollo de negocio y proporcionar la tecnología que sea necesaria para alcanzar el objetivo. Conseguirás rápidamente un gran retorno de la inversión, podrás reorganizar tus recursos, sobretodo los de personal, y <strong>mejorarás tu posición y oferta de producto o servicio en el sector</strong>.' },
  { title: 'Videojuegos', header: 'La cultura que más crece y engancha', class: 'fa fa-gamepad', body: 'Apoyándonos en proyectos con grandes comunidades de software libre como <a href="https://libgdx.badlogicgames.com/">libgdx</a>, desarrollamos librerías de código abierto para crear rápidamente videojuegos que vayan aportando capas reutilizables para videojuegos más complicados (ECS, networking, diálogos, etc...)' },
  { title: 'Websites', header: 'Páginas web personalizadas asequibles', class: 'fa fa-code', body: 'Si quieres diferenciar tu web de las demás que usan servicios gratuitos (como <a href="https://es.wix.com/wix">wix</a>) nos puedes pedir tu página web personalizada para tener un acabado profesional que alcance las mejores métricas (SEO, rendimiento, buenas prácticas,...). Esto hará que esté mejor posicionada y atraiga más usuarios. Además, te proporcionamos acceso a métricas para que puedas adaptarte a lo que quieren tus visitantes.' },
  { title: 'Web Services', header: 'Microservicios & API REST', class: 'fa fa-star', body: 'Realizamos <a href="https://es.wikipedia.org/wiki/Transferencia_de_Estado_Representacional">API REST</a> nivel 3 (<a href="https://en.wikipedia.org/wiki/HATEOAS">HATEOAS</a>) implementado habitualmente usando el nivel de abstracción más alto de <a href="https://spring.io/projects/spring-framework">Spring Framework</a> sobre Spring Data. Esto proporciona la mayor flexibilidad, escalabilidad y reutilización en una infraestructura ágil basada en <a href="https://www.redhat.com/es/topics/microservices">microservicios</a>.<br/><strong>¡Rompe tu monolito y convierte tu empresa realmente a procesos de negocio!<strong>' },
  { title: 'Formación', header: 'Larga experiencia en formación', class: 'fa fa-graduation-cap', body: 'Tenemos mucha experiencia formando personal tanto en la administración pública como en empresa. Prueba los <a href="https://hijosdelspectrum.blogspot.com/p/blog-page.html"><strong>cursos online gratuitos</strong> que compartimos en nuestro blog</a> y contrata cursos especializados particularmente o para tus empleados. <strong><u>El mejor contenido gratuito en español</u></strong>.' },
  { title: 'Open Source', header: 'Amamos la mentalidad Open Source', class: 'fa fa-code', body: 'Liberamos código (en <a href="https://github.com/LanyuEStudio">nuestro repositorio de github</a>) para que, igualmente que nos aprovechamos del trabajo de otros para abaratar costes de desarrollo y mejorar el mantenimiento, podamos retornar valor a la comunidad. También hacemos donaciones a los mejores proyectos (¡no sólo de código vive el hombre!) y <a href="https://ko-fi.com/lanyuestudio">aceptamos micromecenazgo</a> para ello.' }
];

const references = [
  { name: 'Julio Fuentes-Pila', image: { url: 'imgs/boxer-publicidad.webp', description: 'Boxer publicidad', width: '179', height: '91'}, category: 'Propietario', content: 'Entendió el proyecto desde el primer momento e incluso ha realizado aportaciones muy importantes al mismo. Lo más llamativo de su trabajo es su forma de rentabilizar el tiempo de programación. Sin duda seguiré contando con él.<br/><a href="https://printoonline.lanyu.es/">ver proyecto</a>' },
  { name: 'blue lander media', image: { url: 'imgs/blue-lander.webp', description: 'blue lander media', width: '120', height: '120'}, category: 'itch.io user', content: "I discovered MYA in the bundle for racial justice, just wanted to say this is a really cool project! The world needs a visual novel maker that's as easy to use as Twine, this has a lot of potential. Hope you're able to keep working on it!<br/><a href=\"https://lanyu-estudio.itch.io/make-your-adventure\">ver juego</a>" },
  { name: 'Gonzalo Kouyoumdjian', image: { url: 'imgs/gonzalo.webp', description: 'Gonzalo Kouyoumdjian', width: '120', height: '120'}, category: 'MBA Finance, MSc Industrial Engineering', content: 'Ismael ha desarrollado el proyecto con mucha rapidez. Al mismo tiempo ha entendido el problema presentado y encontrado las soluciones.' },
  { name: 'Patty', image: { url: 'imgs/anonimo.webp', description: 'sin imagen', width: '120', height: '120'}, category: 'Alumno curso JavaScript', content: 'Muy buena tu pagina :)<br/><a href="https://hijosdelspectrum.blogspot.com/2017/10/javascript-dom.html">ver post</a>' }
];

const rrss = [
  { name: 'facebook', class: 'fa fa-facebook', url: 'https://fb.me/LanyuEStudio' },
  { name: 'twitter', class: 'fa fa-twitter', url: 'https://twitter.com/LanyuEStudio' },
  { name: 'Blogger', class: 'fa fa-rss', url: 'https://hijosdelspectrum.blogspot.com/' },
  { name: 'YouTube', class: 'fa fa-youtube', url: 'https://www.youtube.com/channel/UCM02UBS6SkPfk_fVg1k_9gg' },
  { name: 'GitHub', class: 'fa fa-github', url: 'https://github.com/LanyuEStudio' }
];

var app = new Vue({
  el: '#service',
  data: {
    services: services
  }
});

var app2 = new Vue({
  el: '#portfolio',
  data: {
    tabs: tabs
  }
});

var app3 = new Vue({
  el: '#reference',
  data: {
    references: references
  }
});

var app4 = new Vue({
  el: '#social',
  data: {
    rrss: rrss
  }
});

var app5 = new Vue({
  el: 'footer',
  data: {
    rrss: rrss
  }
});
