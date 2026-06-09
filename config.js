/* ══════════════════════════════════════════════════════════════
   CONFIGURACIÓN DE FOTOS Y VIDEOS — Richard e Hijos
   ══════════════════════════════════════════════════════════════

   Para cambiar una foto:
   1. Poné la foto nueva en la carpeta "img/"
   2. Cambiá el nombre del archivo acá abajo
   3. Cambiá la descripción si querés
   4. Guardá este archivo y listo, se actualiza solo

   Para agregar un video:
   1. Copiá el link del video de Instagram o Facebook
   2. Pegalo en la sección "videos" de abajo
   3. Ponele un título
   4. Guardá y listo

   ¡No hace falta tocar el HTML para nada!
   ══════════════════════════════════════════════════════════════ */

const CONFIG_FOTOS = {

  /* ─── FONDO PRINCIPAL (hero) ─── */
  hero: {
    archivo: "galeria-16.jpg",
    // Esta es la foto grande de fondo al entrar a la web
  },

  /* ─── FONDO DEL PRELOAD (pantalla de carga) ─── */
  preload: {
    archivo: "preload-1.jpg",
    // Esta foto se muestra de fondo mientras carga la web
  },

  /* ─── HISTORIA / PERFIL (foto de Ricardo) ─── */
  historia: {
    archivo: "perfil-1.jpg",
    descripcion: "Ricardo Morales - Chef y fundador de Richard e Hijos, sirviendo la pata flambeada con orgullo argentino"
  },

  /* ─── EL SHOW (carrusel principal) ───
     Podés agregar o sacar fotos. Solo agregá o borrá líneas.
     El carrusel se adapta solo.
  */
  show: [
    { archivo: "show-1.jpg", descripcion: "El show en su maxima expresion" },
    { archivo: "show-2.jpg", descripcion: "Fuego, sabor y pasion en cada evento" },
    { archivo: "show-3.jpg", descripcion: "La presentacion que todos esperan" },
    { archivo: "show-4.jpg", descripcion: "Pirotecnia y fuego para tu celebracion" },
    { archivo: "show-5.jpg", descripcion: "Cada evento, unico e irrepetible" },
    { archivo: "show-6.jpg", descripcion: "El flambeado ideal para tu festejo" },
    { archivo: "show-7.jpg", descripcion: "Momentos que se guardan para siempre" },
    { archivo: "show-8.jpg", descripcion: "El fuego que da inicio a la celebracion" },
    { archivo: "show-9.png", descripcion: "Richard sirviendo la pata en un quince" },
    { archivo: "show-10.jpg", descripcion: "El show con toda la familia disfrutando" },
    { archivo: "show-11.jpg", descripcion: "La magia del flambeado en blanco y negro" },
    { archivo: "show-12.jpg", descripcion: "Sirviendo la pata a la quinceañera" },
  ],

  /* ─── SERVICIOS (lo que llevamos al evento) ───
     Cada servicio tiene: archivo, icono (emoji), titulo y descripcion.
     Podés agregar o sacar servicios libremente.
  */
  servicios: [
    {
      archivo: "galeria-9.jpg",
      icono: "🥗",
      titulo: "Ensaladas Frescas",
      descripcion: "Lechuga con tomate, zanahoria rallada con choclo y mas variedades. Preparadas el mismo dia para maxima frescura."
    },
    {
      archivo: "galeria-10.jpg",
      icono: "🥟",
      titulo: "Empanadas Artesanales",
      descripcion: "Elaboradas a mano con rellenos tradicionales. Perfectas para el aperitivo o como acompañamiento principal."
    },
    {
      archivo: "galeria-19.jpg",
      icono: "🦐",
      titulo: "Entradas Gourmet",
      descripcion: "Camarones en copa con limon, creps, y opciones a eleccion del cliente. Presentacion impecable para sorprender a tus invitados."
    },
    {
      archivo: "galeria-12.jpg",
      icono: "🍖",
      titulo: "Matambre Arrollado",
      descripcion: "De pollo o de carne, relleno y cocinado con esmero. Servido en platos individuales para cada invitado."
    },
    {
      archivo: "galeria-23.jpg",
      icono: "🧀",
      titulo: "Picadas Gourmet",
      descripcion: "Tablas completas con fiambres, quesos, bruschetas y mas. Presentacion artesanal para el inicio perfecto de tu evento."
    },
    {
      archivo: "galeria-13.jpg",
      icono: "🍞",
      titulo: "Mesa Completa",
      descripcion: "Panes, salsas, aderezos, vajilla y cristaleria. Todo montado y presentado para que tu evento luzca de primera."
    },
    {
      archivo: "equipo-4.jpg",
      icono: "🍽️",
      titulo: "Servicio de Mozo",
      descripcion: "Personal de servicio vestido de negro, profesional y atento. La atencion a los invitados que se merece tu evento."
    },
  ],

  /* ─── GALERÍA DE FOTOS ───
     Podés agregar o sacar fotos. Solo agregá o borrá líneas.
  */
  galeria: [
    { archivo: "galeria-15.jpg", descripcion: "Show de pata flambeada con fuego y pirotecnia" },
    { archivo: "galeria-16.jpg", descripcion: "Ricardo Morales flambeando la pata en evento" },
    { archivo: "galeria-17.jpg", descripcion: "Mesa completa de servicio con ensaladas y panes" },
    { archivo: "galeria-18.jpg", descripcion: "Ensalada de tomate con cebolla en fuente" },
    { archivo: "galeria-19.jpg", descripcion: "Camarones gourmet en copas de presentacion" },
    { archivo: "galeria-21.jpg", descripcion: "Pata flambeada con bengalas y mesa de ensaladas" },
    { archivo: "galeria-22.jpg", descripcion: "Picada gourmet completa con fiambres y quesos" },
    { archivo: "galeria-23.jpg", descripcion: "Mesa de picadas con bruschetas y tabla artesanal" },
    { archivo: "galeria-24.jpg", descripcion: "Detalle de la picada con variedad de fiambres" },
    { archivo: "galeria-25.jpg", descripcion: "Cocina en plena accion emplatando para el evento" },
  ],

  /* ─── EQUIPO DE TRABAJO ───
     Fotos del equipo que hace posible cada evento.
     Podés agregar o sacar fotos libremente.
  */
  equipo: [
    { archivo: "equipo-1.jpg", descripcion: "El equipo preparando empanadas en cocina" },
    { archivo: "equipo-2.jpg", descripcion: "Todo el equipo listo para servir en el evento" },
    { archivo: "equipo-3.jpg", descripcion: "Richard y su equipo con matambre arrollado" },
    { archivo: "equipo-4.jpg", descripcion: "Mozo sirviendo camarones a los invitados" },
  ],

  /* ─── VIDEOS DE REDES SOCIALES ───
     Pegá el link del video de Instagram o Facebook y ponele un título.
     Podés agregar o sacar videos libremente.

     Cada video tiene:
     - url: el link al video (cualquier link de Instagram o Facebook)
     - titulo: el texto que aparece debajo
     - imagen: (OPCIONAL) nombre de una captura en la carpeta img/
               Si no ponés imagen, se muestra un fondo con play

     Al hacer clic se abre el video en la red social.
  */
  videos: [
    { url: "https://www.facebook.com/share/r/1Bp7XeoaXm/", titulo: "Show de pata flambeada en vivo", imagen: "show-2.jpg" },
  ],

};
