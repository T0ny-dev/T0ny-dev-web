const projects = [
  {
    id: 1,
    title: "Plataforma de idiomas + IA",
    technologies: ["Python", "Pandas", "Jupyter Notebook"],
    code: "Privado",
    demoLink: null,
    description:"Wordable es una plataforma gratuita de aprendizaje de idiomas que utiliza inteligencia artificial para ofrecer una experiencia educativa innovadora y personalizada. Diseñada con un enfoque en el microaprendizaje, permite a los estudiantes avanzar mediante lecciones cortas y dinámicas, reforzadas con quizzes interactivos, ejercicios de reconocimiento de voz para mejorar la pronunciación, y pruebas cronometradas que miden rapidez y fluidez en el idioma. Además, cuenta con un módulo avanzado de test de habilidades, donde la IA genera preguntas personalizadas en tiempo real, evalúa las respuestas y presenta los resultados en una escala radial fácil de interpretar. Los usuarios también pueden practicar conversaciones con un chatbot impulsado por IA que simula escenarios reales y resuelve dudas lingüísticas en tiempo real. Con estas herramientas, Wordable combina tecnología de punta y métodos efectivos para acelerar el aprendizaje de idiomas de manera accesible y divertida.",
    githubLink: null,
    views: [
      "/quizz.png",
      "/ia.png",
      "/end.png",
    ],
    bannerImage: "/word.png",
    category: "Desarrollo web",
    videoUrl: "https://www.youtube.com/watch?v=rskTRKmi-dM",
  },
  {
    id: 2,
    title: "ChatNexus GPT",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://chat.agencianexusmarketing.com/",
    description:"Este proyecto integra una solución avanzada de autenticación de usuarios utilizando Auth0, garantizando un acceso seguro y controlado para los usuarios registrados. Se conecta con la API de OpenAI y Tavily IA, aprovechando su capacidad para generar respuestas dinámicas e inteligentes en tiempo real. Además, implementa vistas interactivas que muestran de manera eficiente las respuestas generadas, asegurando una experiencia fluida y amigable para los usuarios",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/nex.png",
    category: "Desarrollo web",
    videoUrl: "https://www.youtube.com/watch?v=nDG_uTtscEw",
  },
  {
    id: 3,
    title: "Portal Desarrolladores LarnU",
    technologies: ["React", "CSS", "Firebase"],
    code: "Privado",
    demoLink: "https://portfolio.example.com",
    description:"Portal de desarrolladores LarnU: Participación activa en el desarrollo frontend, destacando la implementación de componentes reutilizables y estilizados. Se incluyeron pruebas funcionales y de integración para garantizar la calidad del producto, junto con despliegues automatizados utilizando GitHub Actions para CI/CD. La colaboración con equipos multidisciplinarios fue esencial, trabajando bajo metodologías ágiles para cumplir con tiempos estrictos y entregables mínimos viables (MVP), asegurando que el proyecto cumpliera con los estándares de calidad y funcionalidad requeridos.",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/LarnU.png",
    category: "Desarrollo web",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 4,
    title: "Kouka Busquedor de evento en Chile",
    technologies: ["React", "CSS", "Firebase"],
    code: "Privado",
    demoLink: "https://portfolio.example.com",
    description:"El proyecto  de portal de busquedas incluye la conexión con Firebase para gestionar datos en tiempo real, además de diseñar la interfaz de usuario y la identidad visual del portal. Se desarrolló un scrapper basado en ChatGPT que busca eventos en Chile y almacena la información en la base de datos, permitiendo mantener la plataforma actualizada. Adicionalmente, se implementó un buscador por términos que facilita a los usuarios encontrar eventos específicos de manera rápida y eficiente.",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/kouka.png",
    category: "Desarrollo web",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 5,
    title: "Api de datos USICAMM de certificados",
    technologies: ["React", "CSS", "Firebase"],
    code: "Privado",
    demoLink: "https://portfolio.example.com",
    description:"Se creó una vista validadora de certificados, donde los usuarios pueden verificar la autenticidad de un certificado mediante su ID único. Además, los datos del certificado, como el nombre del beneficiario, fecha de emisión y detalles relevantes, se muestran de manera clara en la vista. El backend fue implementado con Node.js y se subió a la plataforma Onrender, lo que permite la gestión eficiente de las solicitudes de validación de certificados, asegurando una integración fluida con el sistema de generación de QR y la base de datos asociada.",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/api.png",
    category: "Desarrollo web",
    videoUrl: "https://www.youtube.com/embed/example",
  },

  {
    id: 6,
    title: "Todo List",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    description:"Desarrollo de una aplicación de lista de tareas (Todo List App) utilizando el framework React. La aplicación permite a los usuarios gestionar sus tareas pendientes o por realizar de manera eficiente e intuitiva.",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/todo.png",
    category: "Desarrollo web",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 7,
    title: "CRUD",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/CRUD.png",
    category: "Desarrollo web",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 8,
    title: "Pokedex",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/pokemon.png",
    category: "Desarrollo web",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 9,
    title: "Magic 8",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/8.JPG",
    category: "Desarrollo web",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 10,
    title: "Servidor con Node.js",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/node.JPG",
    category: "Desarrollo web",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 11,
    title: "Pokemon API",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/pokeapi.JPG",
    category: "Desarrollo web",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 12,
    title: "Wheater API",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/weather.JPG",
    category: "Desarrollo web",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 13,
    title: "Generador de gif con python",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/gif.JPG",
    category: "Desarrollo web",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 14,
    title: "Fake API store",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/store.JPG",
    category: "Desarrollo web",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 15,
    title: "Blog Dev.to",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/blog.JPG",
    category: "Desarrollo web",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 16,
    title: "Sitio web Vaccines",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/vaccine.JPG",
    category: "Sitios web",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 17,
    title: "donuts website",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/donut.JPG",
    category: "Sitios web",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 18,
    title: "Agencia Nexus",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/nexus.JPG",
    category: "Sitios web",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 19,
    title: "LarnU Login",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/larnulog.JPG",
    category: "Sitios web",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 20,
    title: "Runran website",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/run.JPG",
    category: "Sitios web",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 21,
    title: "CANACINTRA website",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/cana.JPG",
    category: "Sitios web",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 22,
    title: "CICADE",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/cicade.JPG",
    category: "Sitios web",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 23,
    title: "Ricardo Botello",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/ric.JPG",
    category: "Sitios web",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 24,
    title: "Jobbi",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/job.JPG",
    category: "Proyectos",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 25,
    title: "Bym group",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/bymg.JPG",
    category: "Proyectos",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 26,
    title: "Tekton",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/tekton.JPG",
    category: "Proyectos",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 27,
    title: "LMS Business Center",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/bc.JPG",
    category: "Proyectos",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 28,
    title: "Kiosko de servicios",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/kiosko.JPG",
    category: "Proyectos",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 29,
    title: "Abogabot",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/abogabot.svg",
    category: "Proyectos",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 30,
    title: "Diseno de Gamificacion",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/gam.JPG",
    category: "Proyectos",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 31,
    title: "Laborcamp Hackathon",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/labor.JPG",
    category: "Proyectos",
    videoUrl: "https://www.youtube.com/embed/example",
  },
  {
    id: 32,
    title: "Tablero de ingenieria KPIS",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/ing.JPG",
    category: "Analisis de datos",
    videoUrl: "https://www.youtube.com/embed/example",
  },

  {
    id: 33,
    title: "Encuestas generadas en Survey JS",
    technologies: ["React", "CSS", "Firebase"],
    code: "Público",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    views: ["https://via.placeholder.com/300/3"],
    bannerImage: "/sur.JPG",
    category: "Analisis de datos",
    videoUrl: "https://www.youtube.com/embed/example",
  }

  
  
  
  
  // Más proyectos...
];

export default projects;
