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

  /* ─── HISTORIA (foto de Ricardo) ─── */
  historia: {
    archivo: "historia-0.png",
    descripcion: "Ricardo Morales - Chef y fundador de Richard e Hijos Pata Flambeada"
  },

  /* ─── EL SHOW (carrusel principal) ───
     Podés agregar o sacar fotos. Solo agregá o borrá líneas.
     El carrusel se adapta solo.
  */
  show: [
    { archivo: "show-1.jpg", descripcion: "El show en su máxima expresión 🔥" },
    { archivo: "show-2.jpg", descripcion: "Fuego, sabor y pasión en cada evento" },
    { archivo: "show-3.jpg", descripcion: "La presentación que todos esperan" },
    { archivo: "show-4.jpg", descripcion: "Pirotecnia y fuego para tu celebración" },
    { archivo: "show-5.jpg", descripcion: "Cada evento, único e irrepetible" },
    { archivo: "show-6.jpg", descripcion: "El flambeado ideal para tu festejo" },
    { archivo: "show-7.jpg", descripcion: "Momentos que se guardan para siempre" },
    { archivo: "show-8.jpg", descripcion: "El fuego que da inicio a la celebración" },
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
      descripcion: "Lechuga con tomate, zanahoria rallada con choclo y más variedades. Preparadas el mismo día para máxima frescura."
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
      descripcion: "Camarones en copa con limón, creps, y opciones a elección del cliente. Presentación impecable para sorprender a tus invitados."
    },
    {
      archivo: "galeria-12.jpg",
      icono: "🍖",
      titulo: "Matambre Arrollado",
      descripcion: "De pollo o de carne, relleno y cocinado con esmero. Servido en platos individuales para cada invitado."
    },
    {
      archivo: "galeria-13.jpg",
      icono: "🍞",
      titulo: "Mesa Completa",
      descripcion: "Panes, salsas, aderezos, vajilla y cristalería. Todo montado y presentado para que tu evento luzca de primera."
    },
    {
      archivo: "galeria-20.jpg",
      icono: "🍽️",
      titulo: "Servicio de Mozo",
      descripcion: "Personal de servicio vestido de negro, profesional y atento. La atención a los invitados que se merece tu evento."
    },
  ],

  /* ─── GALERÍA DE FOTOS ───
     Podés agregar o sacar fotos. Solo agregá o borrá líneas.
  */
  galeria: [
    { archivo: "galeria-15.jpg", descripcion: "Show de pata flambeada con fuego y show" },
    { archivo: "galeria-16.jpg", descripcion: "Ricardo Morales flambeando pata evento" },
    { archivo: "galeria-17.jpg", descripcion: "Mesa completa de servicio con ensaladas y panes" },
    { archivo: "galeria-18.jpg", descripcion: "Ensalada de tomate con cebolla en fuente" },
    { archivo: "galeria-19.jpg", descripcion: "Camarones gourmet en copas de presentación" },
    { archivo: "galeria-20.jpg", descripcion: "Mozo sirviendo camarones a invitados del evento" },
  ],

  /* ─── VIDEOS DE REDES SOCIALES ───
     Pegá el link del video de Instagram o Facebook y ponele un título.
     Podés agregar o sacar videos libremente.

     Ejemplos de links que funcionan:
     - Instagram: https://www.instagram.com/reel/ABC123/
     - Instagram: https://www.instagram.com/p/ABC123/
     - Facebook:  https://www.facebook.com/usuario/videos/123456/
     - Facebook:  https://fb.watch/ABC123/
  */
  videos: [
    // ← Pegá tus videos acá. Ejemplo:
    // { url: "https://www.instagram.com/reel/CODIGO-DEL-VIDEO/", titulo: "Show de fuego en casamiento" },
    // { url: "https://www.facebook.com/ricardo.r.morales.5/videos/123456/", titulo: "Evento corporativo en Trelew" },
  ],

};
