export default {
  global: {
    componenteFormativo:
      'Técnicas de revisión, corrección y verificación en la traducción.',
    descripcionCurso:
      'Traducir textos de acuerdo con metodologías y normativa técnica, tiene toda la intencionalidad de encontrar una uniformidad en el acceso a contenidos informativos, educativos, sociales entre otros; sin embargo, hay pocas opciones formales para atender necesidades tan específicas como aquellos que tienen una lengua de señas por lengua principal, pero que presentan dificultades para entender el lenguaje oral respectivo, especialmente en textos que contienen un alto grado de tecnicismo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Verificación de los procesos de traducción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Técnicas de revisión del texto meta',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Métodos y normas técnicas de revisión y corrección',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Acciones correctivas y de mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Selección de métodos, gramática y hablantes nativos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Técnicas empleadas para acciones correctivas y de mejora',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Estilos de expresión',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bacco, S. (2017). Gestión de calidad y normalización aplicadas a la traducción/Quality management and standardization as applied to translation. <em>Superando límites en traducción e interpretación Além dos limites em tradução e interpretação Beyond limits in Translation and Interpreting,</em> 39.',
    },
    {
      referencia:
        'INSOR (2019). Caracterización de ciudadanos, usuarios y grupos de interés. ',
      link:
        'http://www.insor.gov.co/home/descargar/Caracterizacion_ciudadano_usuarios_grupos_interes_2019.pdf',
    },
    {
      referencia:
        'Ley 324 de 1996. Por la cual se crean algunas normas a favor de la población sorda. Octubre 11 de 1996. D.O. 42899.',
    },
    {
      referencia:
        'Parra Galiano, S. (2005). La revisión de traducciones en traductología: aproximación a la práctica de la revisión en el ámbito profesional mediante el estudio de casos y propuestas de investigación.',
    },
    {
      referencia:
        'Resolución 5274 de 2017. Por la cual se reglamenta el proceso de reconocimiento oficial de intérpretes oficiales de la Lengua de Señas Colombiana – Español. 21 de marzo de 2017. D.O. 50.182',
    },
    {
      referencia:
        'Zalca, I. (s.f). Método de enseñanza de elocución para intérpretes. Boletín AEPE Nº 25. ',
    },
  ],
  glosario: [
    {
      termino: 'Cuantitativo',
      significado: 'De naturaleza numérica o cantidad.',
    },
    {
      termino: 'Elocución',
      significado:
        'Elección y distribución de palabras y pensamientos en un discurso determinado.',
    },
    {
      termino: 'Sintaxis',
      significado:
        'Parte de la lingüística que estudia el orden de las palabras y la relación entre ellas.',
    },
  ],
  complementario: [
    {
      texto:
        'Resolución 5274 de 2017. Por la cual se reglamenta el proceso de reconocimiento oficial de intérpretes oficiales de la Lengua de Señas Colombiana – Español. 21 de marzo de 2017. D.O. 50.182',
      tipo: 'Artículo',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Bacco, S. (2017). Gestión de calidad y normalización aplicadas a la traducción/Quality management and standardization as applied to translation. Superando límites en traducción e interpretación Além dos limites em tradução e interpretação Beyond limits in Translation and Interpreting, 39.',
      tipo: 'Artículo',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Zalca, I. (s.f). Método de enseñanza de elocución para intérpretes. Boletín AEPE Nº 25. ',
      tipo: 'Artículo',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhacesiz Mary Hincapié Atehortúa',
        cargo: 'Instructora',
        centro: 'Centro de Servicios de Salud Regional Antioquia',
      },
      {
        nombre: 'Manuel Alejandro Garzón',
        cargo: 'Instructor',
        centro: 'Centro de Servicios de Salud Regional Antioquia',
      },
      {
        nombre: 'German Albeiro Saldarriga',
        cargo: 'Instructor',
        centro: 'Centro de Servicios de Salud Regional Antioquia',
      },
      {
        nombre: 'Adriana María Bustamante',
        cargo: 'Profesional Diseño Curricular',
        centro: 'Centro de Servicios de Salud Regional Antioquia',
      },
      {
        nombre: 'Luz Mila Pacheco Fuentes',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Martha Isabel Martínez Vargas',
        cargo: 'Productora audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Diana Carolina Acevedo Barón',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Marcia Elizabeth Solano Alvarez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
