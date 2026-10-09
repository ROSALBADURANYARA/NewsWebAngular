export interface Noticia {
  id: string;
  titulo: string;
  categoria: string;
  resumen: string;
  fecha: string;
  autor: string;
  destacado: boolean;
  imagen: string;
  contenido: string[];
}

export const noticias: Noticia[] = [
  {
    id: 'energia-verde',
    titulo: 'Nueva inversión en energías renovables acelera la transición',
    categoria: 'Tecnología',
    resumen: 'Grupos industriales anuncian una cartera de proyectos que promete reducir la huella de carbono en varias regiones.',
    fecha: '2026-10-01',
    autor: 'Lucía Paredes',
    destacado: true,
    imagen: 'img/Tecnologia.jpg',
    contenido: [
      'La apuesta por paneles solares, almacenamiento energético y megaparques eólicos se intensifica en ciudades con políticas climáticas más exigentes.',
      'Analistas señalan que la reducción de costos en baterías y la automatización de la red permitirán que la transición energética sea más accesible para pequeñas y medianas empresas.',
      'El objetivo inmediato es combinar eficiencia operativa con medidas de sostenibilidad para mantener competitividad sin aumentar la presión ambiental.'
    ]
  },
  {
    id: 'ia-educacion',
    titulo: 'Inteligencia artificial transforma la forma de aprender en las universidades',
    categoria: 'Educación',
    resumen: 'Docentes y alumnos están integrando herramientas de apoyo para personalizar la enseñanza y optimizar el rendimiento.',
    fecha: '2026-09-28',
    autor: 'Diego Gómez',
    destacado: true,
    imagen: 'img/Educacion.jpg',
    contenido: [
      'Las universidades ya no ven la IA como un simple asistente, sino como un recurso de apoyo para diseñar rutas de aprendizaje adaptativas.',
      'Professores utilizan sistemas de recomendación para reforzar contenidos complejos y detectar estudiantes con mayor necesidad de tutoría personalizada.',
      'El debate sigue abierto sobre cómo equilibrar innovación y ética en el uso de datos y contenidos generados por algoritmos.'
    ]
  },
  {
    id: 'ciudades-inteligentes',
    titulo: 'Las ciudades inteligentes buscan menos tráfico y mejor calidad de vida',
    categoria: 'Urbanismo',
    resumen: 'Nuevos modelos de movilidad y sensores urbanos optimizan el flujo en zonas congestionadas.',
    fecha: '2026-09-22',
    autor: 'Mateo Ruiz',
    destacado: false,
    imagen: 'img/Turismo.jpg',
    contenido: [
      'La integración de sistemas predictivos y cámaras inteligentes permite anticipar congestiones y coordinar semáforos en tiempo real.',
      'Además, se impulsan estaciones de bicicletas, transporte público eléctrico y espacios verdes conectados a sensores ambientales.',
      'Los expertos consideran que la clave está en diseñar soluciones útiles para la ciudadanía y no solo para la operación administrativa.'
    ]
  },
  {
    id: 'salud-digital',
    titulo: 'La salud digital gana terreno con atención remota más accesible',
    categoria: 'Salud',
    resumen: 'Centros médicos y clínicas amplían consultas virtuales para reducir tiempos de espera y mejorar el acceso.',
    fecha: '2026-09-17',
    autor: 'Carla Moreno',
    destacado: false,
    imagen: 'img/Banner.jpg',
    contenido: [
      'La telemedicina continúa creciendo, especialmente en salud preventiva, seguimiento de tratamientos y atención de pacientes en zonas rurales.',
      'La combinación de registro digital, análisis predictivo y canales seguros facilita diagnósticos más rápidos y continuidad asistencial.',
      'La industria insiste en que el enfoque humano debe seguir siendo central aunque la tecnología facilite la gestión.'
    ]
  },
  {
    id: 'comercio-local',
    titulo: 'El comercio local impulsa ventas con nuevas estrategias digitales',
    categoria: 'Comercio',
    resumen: 'Pequeños negocios fortalecen su presencia online para captar clientes y mejorar la experiencia de compra.',
    fecha: '2026-09-10',
    autor: 'Sebastián Lira',
    destacado: false,
    imagen: 'img/Comercio.jpg',
    contenido: [
      'Los comercios locales están apostando por redes sociales, pagos electrónicos y promociones segmentadas para llegar a nuevas audiencias sin depender solo del tráfico presencial.',
      'La personalización de la experiencia de compra y la mejora del servicio al cliente se convierten en factores clave para aumentar la fidelización.',
      'Los expertos destacan que la combinación entre atención humana y herramientas digitales es la estrategia más efectiva para crecer en mercados competitivos.'
    ]
  }
];
