/**
 * =====================================================================
 *  CONTENIDO EDITABLE DE KAFAO
 *  Precios y fotos según catálogo Septiembre 2026.
 *  Textos ES/EN: src/lib/copy.ts
 *  PDF: /public/catalogo-kafao.pdf  (archivo oficial KAFAO_SEPT)
 * =====================================================================
 */

export const WHATSAPP_NUMBER_DISPLAY = "+593 96 263 3333";
export const WHATSAPP_E164 = "593962633333";

export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
}

export const NAV = [
  { href: "#inicio", id: "home" },
  { href: "#catalogo", id: "catalog" },
  { href: "#promociones", id: "promo" },
  { href: "#politicas", id: "policies" },
  { href: "#contacto", id: "contact" },
] as const;

export const HERO = {
  image: "/images/hero.jpg",
  ctaHref: "#coleccion",
};

export const CATALOG = {
  cover: "/images/catalog-cover.jpg",
  campaign: "/images/artesania-andes.jpg",
  pdfHref: "/catalogo-kafao.pdf",
  pdfDownloadName: "Catalogo-Kafao-Septiembre-2026.pdf",
  edition: "Septiembre 2026",
};

export type Wearer = "Mujer" | "Hombre" | "Unisex";
export type Category = "Ponchos" | "Chompas" | "Pantalones" | "Accesorios" | "Artesanias";

export type Product = {
  id: string;
  price: number;
  compareAt?: number;
  category: Category;
  wearer: Wearer;
  image: string;
  origin: string;
};

/** Selección del catálogo (no está todo: el PDF sí). */
export const PRODUCTS: Product[] = [
  {
    id: "buzo-capucha-vino",
    price: 25,
    category: "Chompas",
    wearer: "Hombre",
    image: "/images/chompa-granada.jpg",
    origin: "Quito",
  },
  {
    id: "buzo-capucha-negra",
    price: 25,
    category: "Chompas",
    wearer: "Hombre",
    image: "/images/chompa-negra.jpg",
    origin: "Quito",
  },
  {
    id: "buzo-deportivo-azul",
    price: 18,
    compareAt: 22,
    category: "Chompas",
    wearer: "Unisex",
    image: "/images/buzo-deportivo-azul.jpg",
    origin: "Quito",
  },
  {
    id: "pantalon-manteno",
    price: 38,
    category: "Pantalones",
    wearer: "Mujer",
    image: "/images/pantalon-colibri.jpg",
    origin: "Quito",
  },
  {
    id: "poncho-urku",
    price: 40,
    category: "Ponchos",
    wearer: "Hombre",
    image: "/images/poncho-urku.jpg",
    origin: "Andes",
  },
  {
    id: "pashmina-crema",
    price: 20,
    category: "Accesorios",
    wearer: "Mujer",
    image: "/images/pashmina-crema.jpg",
    origin: "Andes",
  },
  {
    id: "almohadilla-ayahuma",
    price: 45,
    category: "Artesanias",
    wearer: "Unisex",
    image: "/images/almohadilla-ayahuma.jpg",
    origin: "Ecuador",
  },
];

export const PROMO = {
  image: "/images/promo-buzos.jpg",
  endsAt: "2026-09-30T23:59:59-05:00",
  ctaHref: "#coleccion",
};

export const CONTACT = {
  place: "Quito - Ecuador",
  email: "tribukafao@gmail.com",
};

/** Datos de transferencia. Editar aquí si cambia la cuenta. */
export const BANK = {
  bank: "Banco Pichincha",
  type: "Cuenta de ahorros",
  account: "2212708844",
  holder: "Jorge Ordoñez Merino",
  id: "1722807649",
  email: "tribukafao@gmail.com",
};

export const SOCIALS = [
  {
    id: "instagram",
    name: "Instagram",
    handle: "@kafaomitico",
    href: "https://www.instagram.com/kafaomitico",
  },
  {
    id: "tiktok",
    name: "TikTok",
    handle: "kafao.mitico",
    href: "https://www.tiktok.com/@kafao.mitico",
  },
  {
    id: "facebook",
    name: "Facebook",
    handle: "/Kafao Mítico",
    href: "https://www.facebook.com/KafaoMitico",
  },
] as const;
