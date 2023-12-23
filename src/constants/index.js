import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  unity3d,
  laravel,
  spbox,
  gatblac,
  flutter,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre Mí",
  },
  {
    id: "work",
    title: "Experiencia",
  },
  {
    id: "project",
    title: "Proyectos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Desarrollador Web",
    icon: web,
  },
  {
    title: "Desarrollador React Native",
    icon: mobile,
  },
  {
    title: "Desarrolador Backend",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
];

const experiences = [
  {
    title: "Desarrollador de Videojuego",
    company_name: "U. Austral de Chile y Museos de la Región",
    icon: unity3d,
    iconBg: "#E6DEDD",
    date: "Diciembre 2018 - Agosto 2019",
    points: [
      "Lideré un equipo multidisciplinario para desarrollar la aplicación móvil 'Museum In The Loop' con Unity3D.",
      "Coordiné artistas, músicos y animadores, siendo responsable de unir los elementos clave del proyecto y liderar la programación de la aplicación.",
      "Aseguré la armonía entre la música, arte y animación para lograr un producto final coherente y de alta calidad.",
      "Esta experiencia fusionó mi capacidad de gestión con habilidades técnicas para obtener un producto exitoso y bien integrado.",
    ],
  },
  {
    title: "Desarrollador de Videojuego",
    company_name: "Universidad de Deusto, España",
    icon: unity3d,
    iconBg: "#E6DEDD",
    date: "Agosto 2019 - Diciembre 2020",
    points: [
      "Fui líder de equipo y programador en el desarrollo de una aplicación informática para digitalizar un juego de mesa que identifica roles en equipos de trabajo.",
      "Utilizamos Unity3D y Photon Unity Networking 2 para habilitar partidas multijugador en tiempo real.",
      "Me encargué del liderazgo del equipo y de la programación integral de la aplicación.",
      "Mi enfoque principal fue fusionar liderazgo efectivo y habilidades de programación para lograr una aplicación que cumplió con éxito el objetivo de identificar roles dentro de los equipos de trabajo.",
    ],
  },
  {
    title: "Desarrollador de Web y Software",
    company_name: "Sistematiza SPA",
    icon: laravel,
    iconBg: "#383E56",
    date: "Marzo 2020 - Abril 2021",
    points: [
      "Trabajé en el desarrollo de plataformas web, aplicaciones y software mediante enfoques por proyecto.",
      "Utilicé herramientas como Laravel, Bootstrap 4 y bases de datos MySQL y PostgreSQL para construir plataformas web.",
      "Contribuí al desarrollo de software con .NET, C#, SQLite para almacenamiento local y CefSharp para un navegador web interno.",
      "Participé en la creación de bots empleando Casperjs y Puppeteer, ampliando así mi experiencia en el desarrollo de aplicaciones y automatización de tareas.",
    ],
  },
  {
    title: "Desarrollador Móvil",
    company_name: "Universidad Austral de Chile",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Julio 2020 - Enero 2021",
    points: [
      "Lideré el diseño y desarrollo de la app 'Pensar' en la Universidad Austral de Chile, enfocada en potenciar el pensamiento crítico en estudiantes.",
      "La app guiaba a los usuarios para fortalecer su pensamiento crítico.",
      "Utilicé React-Native, React Native Elements para la interfaz y Firebase para la recopilación de información de la aplicación",
      "Este proyecto combinó tecnología moderna y enfoque educativo para ofrecer una experiencia intuitiva en el desarrollo del pensamiento crítico.",
    ],
  },
  {
    title: "Desarrollador Web",
    company_name: "SPBox SPA",
    icon: spbox,
    iconBg: "#fff",
    date: "Abril 2021 - Mayo 2022",
    points: [
      "Trabajé en el desarrollo de una plataforma documental en SPBox SPA.",
      "Para el frontend, empleé ReactJS con TypeScript y como framework de estilos, implementé Fluent UI.",
      "Para manejar los estados de las plataformas, utilicé Redux. En cuanto al backend, se emplearon listas y bibliotecas de SharePoint.",
      "Esta combinación de tecnologías permitió una integración efectiva y funcional para lograr una plataforma documental de alta calidad en SPBox SPA.",
    ],
  },
  {
    title: "Desarrollador de Software",
    company_name: "Gat-blac SPA",
    icon: gatblac,
    iconBg: "#fdd900",
    date: "junio 2022 - Octubre 2023",
    points: [
      "En Gat-blac SPA, me dediqué al desarrollo de software utilizando tecnología Silverlight y SQL Server como base principal.",
      "Trabajé con SQL Server como base de datos y en una API REST con .NET para facilitar la interacción entre Silverlight y la base de datos.",
      "Mi participación involucró la creación de varios Store Procedures en SQL Server, encargados de gestionar datos cruciales para los proyectos.",
      "Además, contribuí en proyectos desarrollados con Angular, ampliando así mi experiencia en distintos entornos de desarrollo de software.",
    ],
  },
  {
    title: "Desarrollador Móvil",
    company_name: "U. Austral de Chile y Conaf",
    icon: flutter,
    iconBg: "#E6DEDD",
    date: "Noviembre 2022 - Octubre 2023",
    points: [
      "Lideré el diseño y desarrollo de la aplicación móvil 'E-ncendio' en colaboración con la Universidad Austral de Chile y CONAF.",
      "La app fue diseñada para capturar la percepción de los habitantes sobre los incendios forestales en la región.",
      "Utilicé Flutter y Dart para el desarrollo de la aplicación móvil, mientras que para el backend implementé Javascript, Node.js y MongoDB.",
      "Integramos blockchain para asegurar la trazabilidad de datos, facilitando un análisis detallado sobre incendios forestales.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
