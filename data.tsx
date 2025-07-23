import {
  BellPlus,
  BookText,
  Briefcase,
  Brush,
  Code2,
  CodeSquare,
  Gamepad,
  Home,
  Inbox,
  Mail,
  PanelsTopLeft,
  Phone,
  UserRound,
  UsersRound,
  Wrench,
} from "lucide-react";

export const dataAboutMe = [
  {
    id: 1,
    name: "Experiencia",
    icon: <Briefcase />,
    description: "+4 años de experiencia",
  },
  // {
  //     id: 2,
  //     name: "Clientes",
  //     icon: <UsersRound />,
  //     description: "+10 clientes satisfechos",
  // },
  {
    id: 2,
    name: "Proyectos",
    icon: <Wrench />,
    description: "+20 completados",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <Home size={20} />,
    link: "#home",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={20} />,
    link: "#about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={20} />,
    link: "#services",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={20} />,
    link: "#portfolio",
  },
  {
    id: 5,
    title: "Home",
    icon: <Mail size={20} />,
    link: "#contact",
  },
];

export const dataSlider = [
  {
    id: 1,
    url: "/slider-1.jpg",
  },
  {
    id: 2,
    url: "/slider-2.jpg",
  },
  {
    id: 3,
    url: "/slider-3.jpg",
  },
  {
    id: 4,
    url: "/slider-4.jpg",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Video Juegos",
    image: "/Juegos.webp",
    urlGithub: "#!",
    urlDemo:
      "https://play.google.com/store/apps/details?id=com.ZGames.NinjaDragon",
  },
  {
    id: 2,
    title: "Aplicaciones",
    image: "/programas.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 3,
    title: "Desarrollo Web",
    image: "/image-3.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 4,
    title: "3D",
    image: "/3D.webp",
    urlGithub: "#!",
    urlDemo: "https://z-games-art.netlify.app/",
  },
];

export const dataExperience = [
  {
    id: 1,
    title: "Desarrollo de videojuegos  🎮",
    experience: [
      {
        name: "Unity",
        subtitle: "Experimentado",
        value: 70,
      },
      {
        name: "C#",
        subtitle: "Experimentado",
        value: 70,
      },
      {
        name: "Unrreal engine",
        subtitle: "Básico",
        value: 20,
      },
      {
        name: "Illustrator",
        subtitle: "Intermedio",
        value: 50,
      },
      {
        name: "Photoshop",
        subtitle: "Básico",
        value: 20,
      },
    ],
  },
  {
    id: 2,
    title: "Desarrollo de software  🧑‍💻",
    experience: [
      {
        name: "Java",
        subtitle: "Experimentado",
        value: 70,
      },
      {
        name: "Node JS",
        subtitle: "Básico",
        value: 20,
      },
      {
        name: "Python",
        subtitle: "Básico",
        value: 20,
      },
      {
        name: "MySQL",
        subtitle: "Intermedio",
        value: 50,
      },
      {
        name: "Html",
        subtitle: "Intermedio",
        value: 40,
      },
      {
        name: "CSS",
        subtitle: "Intermedio",
        value: 35,
      },
      {
        name: "C#",
        subtitle: "Experimentado",
        value: 70,
      },
    ],
  },
  {
    id: 1,
    title: "3D  🖼️",
    experience: [
      {
        name: "Blender",
        subtitle: "Intermedio",
        value: 40,
      },
      {
        name: "Zbrush",
        subtitle: "Básico",
        value: 25,
      },
      {
        name: "Substance Painter",
        subtitle: "Básico",
        value: 30,
      },
      {
        name: "Marmoset",
        subtitle: "Básico",
        value: 25,
      },
    ],
  },
];

export const dataServices = [
  {
    id: 1,
    title: "Desarrollo de videojuegos",
    icon: <Gamepad />,
    features: [
      {
        name: "Level Desing (creación y estructuración de niveles o mapas)",
      },
      {
        name: "Manejo de motor de juegos (Unity) para aplicar assets",
      },
      {
        name: "Programación en general para videojuegos (IA, UI, funcionalidades de assets, etc.",
      },
      {
        name: "Creacion de historias para juegos (proporciona la trama a el juego)",
      },
      {
        name: "Creacion de assets 2D (en Illustrator)",
      },
      {
        name: "Monetizacion y produccion de videojuegos (aplicacion de anuncios y microtransacciones)",
      },
      {
        name: "Mantenimiento y soporte continuo",
      },
    ],
  },
  {
    id: 2,
    title: "Desarrollo de aplicativos informaticos",
    icon: <PanelsTopLeft />,
    features: [
      {
        name: "Creación de interfaces gráficas atractivas",
      },
      {
        name: "Creación Y gestión de bases de datos (mySQL)",
      },
      {
        name: "Implementación de funcionalidades para aplicativos informaticos",
      },
      {
        name: "Producción de aplicativos terminados",
      },
      {
        name: "Mantenimiento y soporte continuo",
      },
    ],
  },
  {
    id: 3,
    title: "3D",
    icon: <Brush />,
    features: [
      {
        name: "Modelado de objetos 3D, medienate blocking (Blender)",
      },
      {
        name: "Detalles a objetos 3D (Zbrush)",
      },
      {
        name: "Texturizado (Substance painter)",
      },
      {
        name: "Renderización (Marmoset)",
      },
    ],
  },
];

export const dataContact = [
  {
    id: 1,
    title: "Teléfono",
    subtitle: "+57 301 470 6184",
    link: "tel:+573014706184",
    icon: <Phone />,
  },
  {
    id: 2,
    title: "Github",
    subtitle: "github.com/cdc192728",
    link: "https://github.com/cdc192728",
    icon: <Code2 />,
  },
  {
    id: 3,
    title: "Email",
    subtitle: "diazcalderincristian113@gmail.com",
    link: "mailto:diazcalderincristian113@gmail.com",
    icon: <Inbox />,
  },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "George Snow",
    description:
      "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
    imageUrl: "/profile-1.jpeg",
  },
  {
    id: 2,
    name: "Juan Pérez",
    description:
      "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
    imageUrl: "/profile-2.jpeg",
  },
  {
    id: 3,
    name: "María García",
    description:
      "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
    imageUrl: "/profile-3.jpeg",
  },
  {
    id: 4,
    name: "Laura Snow",
    description:
      "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
    imageUrl: "/profile-3.jpeg",
  },
  {
    id: 5,
    name: "Carlos Sánchez",
    description:
      "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
    imageUrl: "/profile-2.jpeg",
  },
  {
    id: 6,
    name: "Antonio Martínez",
    description:
      "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    imageUrl: "/profile-3.jpeg",
  },
];
