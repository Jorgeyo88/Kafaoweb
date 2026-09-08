import type { Category, Wearer } from "@/lib/site-data";

export type Locale = "es" | "en";

type ProductCopy = { name: string; description: string };

export type Copy = {
  skip: string;
  title: string;
  description: string;
  nav: { home: string; catalog: string; promo: string; policies: string; contact: string };
  navAria: string;
  mobileAria: string;
  openMenu: string;
  closeMenu: string;
  write: string;
  langAria: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    talk: string;
    alt: string;
  };
  catalog: {
    kicker: string;
    eyebrow: string;
    title: string;
    body: string;
    download: string;
    pdfNote: string;
    coverAlt: string;
    coverTitle: string;
    campaignAlt: string;
    campaignTitle: string;
    campaignBody: string;
    campaignKicker: string;
  };
  gallery: {
    kicker: string;
    title: string;
    body: string;
    filterAria: string;
    detail: string;
    ask: string;
    askNote: string;
    sale: string;
    wa: (name: string, price: string, wearer: string) => string;
  };
  filters: Record<"todos" | "mujer" | "hombre" | Category, string>;
  wearer: Record<Wearer, string>;
  category: Record<Category, string>;
  products: Record<string, ProductCopy>;
  promo: {
    kicker: string;
    mark: string;
    title: string;
    body: string;
    cta: string;
    ended: string;
    remainAria: string;
    alt: string;
    days: string;
    hours: string;
    mins: string;
    secs: string;
  };
  policies: {
    kicker: string;
    title: string;
    lead: string;
    items: { envios: { title: string; body: string }; cambios: { title: string; body: string }; pagos: { title: string; body: string } };
    bank: {
      title: string;
      lead: string;
      bank: string;
      type: string;
      account: string;
      holder: string;
      id: string;
      email: string;
      copy: string;
      copied: string;
    };
  };
  contact: {
    kicker: string;
    title: string;
    note: string;
    hours: string;
    formTitle: string;
    formLead: string;
    name: string;
    namePh: string;
    interest: string;
    message: string;
    messagePh: string;
    send: string;
    wa: (name: string, topic: string, extra: string) => string;
  };
  topics: { id: string; label: string; value: string }[];
  footer: {
    blurb: string;
    nav: string;
    socials: string;
    legal: string;
  };
  waFloat: { aria: string; tip: string; text: string };
};

const es: Copy = {
  skip: "Saltar al contenido",
  title: "Kafao · Ropa artesanal de Ecuador",
  description: "Kafao — ropa y accesorios artesanales de Ecuador. Viste tu esencia étnica.",
  nav: { home: "Inicio", catalog: "Catálogo", promo: "Promociones", policies: "Políticas", contact: "Contacto" },
  navAria: "Principal",
  mobileAria: "Móvil",
  openMenu: "Abrir menú",
  closeMenu: "Cerrar menú",
  write: "Escribir",
  langAria: "Idioma",
  hero: {
    eyebrow: "Hecho a mano en los Andes ecuatorianos",
    title: "Viste tu esencia étnica.",
    subtitle: "Ropa y Accesorios Artesanales de Ecuador.",
    cta: "Ver Colección",
    talk: "Hablar con el atelier",
    alt: "Modelo Kafao en los Andes ecuatorianos, con poncho tejido a mano",
  },
  catalog: {
    kicker: "01 · Septiembre 2026",
    eyebrow: "Catálogo oficial",
    title: "Catálogo Colección Andes",
    body: "Buzos, ponchos, pantalones y artesanías hechas por artesanos ecuatorianos. Esta página muestra una selección; el PDF tiene la colección completa, con tallas y precios.",
    download: "Descargar Catálogo Completo (PDF)",
    pdfNote: "Catálogo oficial, septiembre 2026. Precios en USD. Pedidos por WhatsApp.",
    coverAlt: "Portada del catálogo Kafao septiembre 2026",
    coverTitle: "Catálogo",
    campaignAlt: "Cojín artesanal Mujer Saraguro, Kafao",
    campaignTitle: "Artesanías de Ecuador",
    campaignBody:
      "Cojines Saraguro, almohadillas Aya Huma, vírgenes quiteñas y más. Cada pieza nace en el taller de un artesano. En el catálogo están todas.",
    campaignKicker: "Artesanías",
  },
  gallery: {
    kicker: "02 · Colección",
    title: "Para ella y para él",
    body: "Una muestra del catálogo de septiembre: buzos, ponchos, pantalones y artesanías. Toca una pieza para ver detalle y pedirla.",
    filterAria: "Filtrar prendas",
    detail: "Ver detalle",
    ask: "Pedir por WhatsApp",
    askNote: "Te confirmamos talla, color y envío a mano.",
    sale: "Oferta",
    wa: (name, price, wearer) =>
      `Hola Kafao, me interesa ${name} (${price}, ${wearer}). ¿Tienen disponibilidad?`,
  },
  filters: {
    todos: "Todos",
    mujer: "Mujer",
    hombre: "Hombre",
    Ponchos: "Ponchos",
    Chompas: "Buzos",
    Pantalones: "Pantalones",
    Accesorios: "Accesorios",
    Artesanias: "Artesanías",
  },
  wearer: { Mujer: "Mujer", Hombre: "Hombre", Unisex: "Unisex" },
  category: {
    Ponchos: "Ponchos",
    Chompas: "Buzos",
    Pantalones: "Pantalones",
    Accesorios: "Accesorios",
    Artesanias: "Artesanías",
  },
  products: {
    "buzo-capucha-vino": {
      name: "Buzo con Capucha Rojo-Vino",
      description:
        "90 % algodón, 10 % poliéster. Tapiz andino en capucha y mangas; cada tapiz varía, tu prenda es única. Tallas S | M | L | XL.",
    },
    "buzo-capucha-negra": {
      name: "Buzo con Capucha Negra",
      description:
        "90 % algodón, 10 % poliéster. Capucha forrada en tapiz andino y grecas en las mangas. Tallas S | M | L | XL.",
    },
    "buzo-deportivo-azul": {
      name: "Buzo Deportivo Azul",
      description:
        "Últimas unidades. 90 % algodón, 10 % poliéster, tapiz andino en la manga y logo Kafao al pecho. Tallas S | L | XL. 20 % de descuento.",
    },
    "pantalon-manteno": {
      name: "Pantalón Manteño Celeste",
      description:
        "98 % algodón, 2 % elastano. Tiro alto, pretina con cordón y colibrí bordado. Tallas 8 | 10 | 12 | 14.",
    },
    "poncho-urku": {
      name: "Poncho Urku",
      description:
        "Tejido acrílico de alta calidad con mezcla de alpaca. Urku: la montaña. Árbol de la vida y grecas andinas. Talla grande.",
    },
    "pashmina-crema": {
      name: "Pashmina Bordada Crema",
      description:
        "Baby alpaca con bordado floral. Chal ligero, flecos y flores a mano. Una pieza de mujer para el día o la noche.",
    },
    "almohadilla-ayahuma": {
      name: "Almohadilla de viaje Aya Huma",
      description:
        "Artesanía. Sublimación en tela hipoalergénica y relleno de alta calidad. El Aya Huma, para el cuello en el camino.",
    },
  },
  promo: {
    kicker: "Últimas unidades",
    mark: "03 · Oferta",
    title: "Últimas unidades en Buzos Deportivos Kafao. 20% de descuento.",
    body: "Negro, azul y crema. Hasta agotar stock.",
    cta: "Ver buzos",
    ended: "Esta oferta de buzos ha cerrado.",
    remainAria: "Tiempo restante de la oferta",
    alt: "Buzos Kafao, últimas unidades con 20% de descuento",
    days: "Días",
    hours: "Horas",
    mins: "Min",
    secs: "Seg",
  },
  policies: {
    kicker: "04 · Atelier",
    title: "Políticas de ventas",
    lead: "Comprar a Kafao es tratar con el taller. Envíos, cambios y pagos, claros desde el primer mensaje.",
    items: {
      envios: {
        title: "Envíos Seguros",
        body: "Enviamos por Servientrega a todo Ecuador. El tiempo máximo de entrega es de 48 horas laborables. En compras mayores a $50 el envío no tiene costo.",
      },
      cambios: {
        title: "Política de Cambios",
        body: "Tienes 15 días para cambiar talla o modelo, con la prenda en perfecto estado y su etiqueta. Escribe por WhatsApp y lo resolvemos.",
      },
      pagos: {
        title: "Métodos de Pago",
        body: "Transferencia a Banco Pichincha o efectivo en Quito. El pedido se reserva con un abono.",
      },
    },
    bank: {
      title: "Transferencias a Kafao",
      lead: "Cuenta de ahorros Banco Pichincha. Copia el número al hacer el depósito.",
      bank: "Banco",
      type: "Tipo de cuenta",
      account: "Número de cuenta",
      holder: "Titular",
      id: "Cédula",
      email: "Correo",
      copy: "Copiar número",
      copied: "Copiado",
    },
  },
  contact: {
    kicker: "05 · Conversemos",
    title: "Contacto",
    note: "Atelier y envíos desde Quito. Cada pedido se confirma a mano.",
    hours: "Lunes a sábado, 9:00 – 18:00",
    formTitle: "Escribir al atelier",
    formLead: "Te respondemos por WhatsApp, el mismo día hábil.",
    name: "Nombre",
    namePh: "Tu nombre",
    interest: "Me interesa",
    message: "Mensaje",
    messagePh: "Talla, color o fecha en la que lo necesitas…",
    send: "Enviar por WhatsApp",
    wa: (name, topic, extra) =>
      extra
        ? `Hola Kafao, soy ${name}. Quiero información sobre ${topic}. ${extra}`
        : `Hola Kafao, soy ${name}. Quiero información sobre ${topic}.`,
  },
  topics: [
    { id: "general", label: "Información general", value: "información general sobre sus prendas" },
    { id: "ponchos", label: "Ponchos y ruanas", value: "un poncho o ruana" },
    { id: "chompas", label: "Buzos", value: "un buzo" },
    { id: "pantalones", label: "Pantalones", value: "un pantalón" },
    { id: "pashminas", label: "Pashminas y chales", value: "una pashmina" },
    { id: "artesanias", label: "Artesanías", value: "una artesanía" },
    { id: "mayor", label: "Pedido al por mayor", value: "un pedido mayor o al por mayor" },
  ],
  footer: {
    blurb: "Ropa y accesorios artesanales de Ecuador. Viste tu esencia étnica.",
    nav: "Navegación",
    socials: "Redes y taller",
    legal: "Hecho en Ecuador",
  },
  waFloat: {
    aria: "Escribir a Kafao por WhatsApp",
    tip: "WhatsApp",
    text: "Hola Kafao, quiero información sobre sus prendas",
  },
};

const en: Copy = {
  skip: "Skip to content",
  title: "Kafao · Handcrafted clothing from Ecuador",
  description: "Kafao — handcrafted clothing and accessories from Ecuador. Wear your Andean essence.",
  nav: { home: "Home", catalog: "Catalog", promo: "Offers", policies: "Policies", contact: "Contact" },
  navAria: "Primary",
  mobileAria: "Mobile",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  write: "Write us",
  langAria: "Language",
  hero: {
    eyebrow: "Handmade in the Ecuadorian Andes",
    title: "Wear your ethnic essence.",
    subtitle: "Artisan clothing and accessories from Ecuador.",
    cta: "See the collection",
    talk: "Talk to the atelier",
    alt: "Kafao model in the Ecuadorian Andes, wearing a handwoven poncho",
  },
  catalog: {
    kicker: "01 · September 2026",
    eyebrow: "Official catalog",
    title: "Andes Collection Catalog",
    body: "Hoodies, ponchos, trousers and crafts made by Ecuadorian artisans. This page shows a selection; the PDF has the full collection, with sizes and prices.",
    download: "Download full catalog (PDF)",
    pdfNote: "Official catalog, September 2026 (Spanish). Prices in USD. Orders via WhatsApp.",
    coverAlt: "Cover of the Kafao September 2026 catalog",
    coverTitle: "Catalog",
    campaignAlt: "Saraguro Woman artisan cushion, Kafao",
    campaignTitle: "Crafts from Ecuador",
    campaignBody:
      "Saraguro cushions, Aya Huma travel pillows, Quito virgins and more. Each piece is born in an artisan's workshop. The catalog has them all.",
    campaignKicker: "Crafts",
  },
  gallery: {
    kicker: "02 · Collection",
    title: "For her and for him",
    body: "A sample from the September catalog: hoodies, ponchos, trousers and crafts. Tap a piece to see detail and order.",
    filterAria: "Filter pieces",
    detail: "View details",
    ask: "Order on WhatsApp",
    askNote: "We'll confirm size, color and shipping by hand.",
    sale: "Sale",
    wa: (name, price, wearer) =>
      `Hello Kafao, I'm interested in ${name} (${price}, ${wearer}). Is it available?`,
  },
  filters: {
    todos: "All",
    mujer: "Women",
    hombre: "Men",
    Ponchos: "Ponchos",
    Chompas: "Hoodies",
    Pantalones: "Trousers",
    Accesorios: "Accessories",
    Artesanias: "Crafts",
  },
  wearer: { Mujer: "Women", Hombre: "Men", Unisex: "Unisex" },
  category: {
    Ponchos: "Ponchos",
    Chompas: "Hoodies",
    Pantalones: "Trousers",
    Accesorios: "Accessories",
    Artesanias: "Crafts",
  },
  products: {
    "buzo-capucha-vino": {
      name: "Burgundy Zip Hoodie",
      description:
        "90% cotton, 10% polyester. Andean cloth on the hood and sleeves; each tapiz is unique. Sizes S | M | L | XL.",
    },
    "buzo-capucha-negra": {
      name: "Black Zip Hoodie",
      description:
        "90% cotton, 10% polyester. Hood lined with Andean cloth and woven bands on the sleeves. Sizes S | M | L | XL.",
    },
    "buzo-deportivo-azul": {
      name: "Blue Sweatshirt",
      description:
        "Last units. 90% cotton, 10% polyester, Andean tapiz on the sleeve and Kafao mark at the chest. Sizes S | L | XL. 20% off.",
    },
    "pantalon-manteno": {
      name: "Manteño Sky Trousers",
      description:
        "98% cotton, 2% elastane. High rise, drawstring waist and embroidered hummingbird. Sizes 8 | 10 | 12 | 14.",
    },
    "poncho-urku": {
      name: "Urku Poncho",
      description:
        "High-quality acrylic with alpaca. Urku: the mountain. Tree of life and Andean grecas. Large size.",
    },
    "pashmina-crema": {
      name: "Cream Embroidered Pashmina",
      description:
        "Baby alpaca with floral embroidery. A light shawl with fringe — a women's piece for day or evening.",
    },
    "almohadilla-ayahuma": {
      name: "Aya Huma Travel Pillow",
      description:
        "Craft. Sublimation on hypoallergenic cloth with quality filling. The Aya Huma, for the neck on the road.",
    },
  },
  promo: {
    kicker: "Last units",
    mark: "03 · Offer",
    title: "Last units of Kafao sweatshirts. 20% off.",
    body: "Black, blue and cream. While stocks last.",
    cta: "See sweatshirts",
    ended: "This sweatshirt offer has closed.",
    remainAria: "Time left on the offer",
    alt: "Kafao hoodies, last units at 20% off",
    days: "Days",
    hours: "Hours",
    mins: "Min",
    secs: "Sec",
  },
  policies: {
    kicker: "04 · Atelier",
    title: "Sales policies",
    lead: "Buying from Kafao means dealing with the workshop. Shipping, exchanges and payment, clear from the first message.",
    items: {
      envios: {
        title: "Secure shipping",
        body: "We ship with Servientrega across Ecuador. Maximum delivery time: 48 business hours. Free shipping on orders over $50.",
      },
      cambios: {
        title: "Exchange policy",
        body: "You have 15 days to exchange size or model, with the piece in perfect condition and its label. Write on WhatsApp and we'll sort it.",
      },
      pagos: {
        title: "Payment methods",
        body: "Bank transfer to Banco Pichincha or cash in Quito. Orders are reserved with a deposit.",
      },
    },
    bank: {
      title: "Transfers to Kafao",
      lead: "Banco Pichincha savings account. Copy the number when you make the deposit.",
      bank: "Bank",
      type: "Account type",
      account: "Account number",
      holder: "Account holder",
      id: "ID",
      email: "Email",
      copy: "Copy number",
      copied: "Copied",
    },
  },
  contact: {
    kicker: "05 · Let's talk",
    title: "Contact",
    note: "Atelier and shipping from Quito. Every order is confirmed by hand.",
    hours: "Monday to Saturday, 9:00 – 18:00",
    formTitle: "Write to the atelier",
    formLead: "We reply on WhatsApp, the same business day.",
    name: "Name",
    namePh: "Your name",
    interest: "I'm interested in",
    message: "Message",
    messagePh: "Size, color, or the date you need it…",
    send: "Send on WhatsApp",
    wa: (name, topic, extra) =>
      extra
        ? `Hello Kafao, I'm ${name}. I'd like information about ${topic}. ${extra}`
        : `Hello Kafao, I'm ${name}. I'd like information about ${topic}.`,
  },
  topics: [
    { id: "general", label: "General information", value: "your pieces in general" },
    { id: "ponchos", label: "Ponchos and ruanas", value: "a poncho or ruana" },
    { id: "chompas", label: "Hoodies", value: "a hoodie" },
    { id: "pantalones", label: "Trousers", value: "trousers" },
    { id: "pashminas", label: "Pashminas and shawls", value: "a pashmina" },
    { id: "artesanias", label: "Crafts", value: "a craft piece" },
    { id: "mayor", label: "Wholesale order", value: "a wholesale order" },
  ],
  footer: {
    blurb: "Handcrafted clothing and accessories from Ecuador. Wear your ethnic essence.",
    nav: "Navigation",
    socials: "Studio and socials",
    legal: "Made in Ecuador",
  },
  waFloat: {
    aria: "Message Kafao on WhatsApp",
    tip: "WhatsApp",
    text: "Hello Kafao, I would like information about your pieces",
  },
};

export const COPY: Record<Locale, Copy> = { es, en };
