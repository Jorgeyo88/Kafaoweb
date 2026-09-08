import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useLocale } from "./router-B2Vj2XB_.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-h7wVQJ2f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Fondo andino de toda la página.
* Fotos: /public/images/texture.jpg
* Greca: /public/patterns/andino.svg
*/
function SiteBackground() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "site-bg",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "site-bg__weave" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "site-bg__greca" })]
	});
}
/**
* =====================================================================
*  CONTENIDO EDITABLE DE KAFAO
*  Cambia aquí precios, fotos, fechas y enlaces.
*  Los textos (ES/EN) viven en src/lib/copy.ts
* =====================================================================
*/
var WHATSAPP_NUMBER_DISPLAY = "+593 96 263 3333";
var WHATSAPP_E164 = "593962633333";
function waLink(text) {
	return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
}
var NAV = [
	{
		href: "#inicio",
		id: "home"
	},
	{
		href: "#catalogo",
		id: "catalog"
	},
	{
		href: "#promociones",
		id: "promo"
	},
	{
		href: "#politicas",
		id: "policies"
	},
	{
		href: "#contacto",
		id: "contact"
	}
];
var HERO = {
	image: "/images/hero.jpg",
	ctaHref: "#coleccion"
};
var CATALOG = {
	cover: "/images/catalog-cover.jpg",
	campaign: "/images/detalles-enamoran.jpg",
	pdfHref: "/catalogo-kafao.pdf",
	edition: "Equinoccio 2026"
};
/** Galería. Textos por id en src/lib/copy.ts */
var PRODUCTS = [
	{
		id: "ruana-rayas-otavalo",
		price: 78,
		category: "Ponchos",
		wearer: "Mujer",
		image: "/images/ruana-rayas-otavalo.jpg",
		origin: "Otavalo"
	},
	{
		id: "poncho-arbol-vida",
		price: 98,
		category: "Ponchos",
		wearer: "Hombre",
		image: "/images/poncho-arbol-vida.jpg",
		origin: "Imbabura"
	},
	{
		id: "pantalon-colibri",
		price: 68,
		category: "Pantalones",
		wearer: "Mujer",
		image: "/images/pantalon-colibri.jpg",
		origin: "Quito"
	},
	{
		id: "chompa-granada",
		price: 72,
		category: "Chompas",
		wearer: "Hombre",
		image: "/images/chompa-granada.jpg",
		origin: "Quito"
	},
	{
		id: "chompa-negra",
		price: 72,
		category: "Chompas",
		wearer: "Hombre",
		image: "/images/chompa-negra.jpg",
		origin: "Quito"
	},
	{
		id: "collar-quilotoa",
		price: 36,
		compareAt: 45,
		category: "Accesorios",
		wearer: "Unisex",
		image: "/images/collar-quilotoa.jpg",
		origin: "Quito"
	},
	{
		id: "collar-ambar",
		price: 34,
		compareAt: 42,
		category: "Accesorios",
		wearer: "Unisex",
		image: "/images/collar-ambar.jpg",
		origin: "Quito"
	}
];
var PROMO = {
	image: "/images/accessories.jpg",
	endsAt: "2026-09-30T23:59:59-05:00",
	ctaHref: "#coleccion"
};
var CONTACT = { place: "Quito - Ecuador" };
var SOCIALS = [
	{
		id: "instagram",
		name: "Instagram",
		handle: "@kafaomitico",
		href: "https://www.instagram.com/kafaomitico"
	},
	{
		id: "tiktok",
		name: "TikTok",
		handle: "kafao.mitico",
		href: "https://www.tiktok.com/@kafao.mitico"
	},
	{
		id: "facebook",
		name: "Facebook",
		handle: "/Kafao Mítico",
		href: "https://www.facebook.com/KafaoMitico"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatUsd(amount, locale = "es") {
	return new Intl.NumberFormat(locale === "en" ? "en-US" : "es-EC", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0
	}).format(amount);
}
/** Logo de Kafao — sustituye /public/logo.png para actualizarlo en todo el sitio. */
function Logo({ className = "h-10 w-auto" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/logo.png",
		alt: "Kafao",
		className
	});
}
function LangSwitch() {
	const { locale, setLocale, t } = useLocale();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "lang-switch",
		role: "group",
		"aria-label": t.langAria,
		"data-locale": locale,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			id: "kafao-lang-es",
			"aria-pressed": locale === "es",
			onClick: () => setLocale("es"),
			children: "ES"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			id: "kafao-lang-en",
			"aria-pressed": locale === "en",
			onClick: () => setLocale("en"),
			children: "EN"
		})]
	});
}
function IconWhatsApp({ className, title = "WhatsApp" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": !title,
		children: [title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: title }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.04 2C6.58 2 2.15 6.43 2.15 11.89c0 1.74.46 3.44 1.32 4.94L2 22l5.31-1.39a9.86 9.86 0 0 0 4.73 1.2h.01c5.46 0 9.89-4.43 9.89-9.89C22 6.43 17.5 2 12.04 2Zm5.72 14.05c-.24.67-1.4 1.23-1.94 1.3-.5.07-1.12.1-1.81-.11-.42-.13-.95-.31-1.64-.6-2.89-1.25-4.77-4.16-4.92-4.35-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36h.56c.18 0 .42-.07.66.5.24.58.82 2 .89 2.15.07.15.12.32.02.52-.1.2-.15.32-.29.5-.14.17-.3.39-.43.52-.14.14-.29.3-.12.58.16.29.73 1.2 1.56 1.95 1.08.96 1.98 1.26 2.27 1.4.29.14.46.12.63-.07.17-.2.73-.85.93-1.14.2-.29.39-.24.66-.14.27.1 1.72.81 2.02.96.29.14.49.22.56.34.07.13.07.74-.17 1.41Z" })]
	});
}
function IconInstagram({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.6",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3.5",
				y: "3.5",
				width: "17",
				height: "17",
				rx: "5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "3.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "17.2",
				cy: "6.8",
				r: "0.9",
				fill: "currentColor",
				stroke: "none"
			})
		]
	});
}
function IconTikTok({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14.2 3c.4 2.5 1.9 4.3 4.3 4.6v2.5c-1.46.14-2.8-.32-4.05-1.18v6.4c0 3.3-2.5 5.68-5.7 5.68A5.67 5.67 0 0 1 3 15.4c0-3.2 2.6-5.74 5.8-5.74.4 0 .8.04 1.18.12v2.62a3.1 3.1 0 0 0-1.18-.23 3.05 3.05 0 0 0-3.07 3.08 3.05 3.05 0 0 0 3.07 3.07c1.7 0 3.08-1.34 3.08-3.05V3h2.32Z" })
	});
}
function IconFacebook({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-1c0-.6.4-1 1-1Z" })
	});
}
function IconMenu({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.6",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M4 7h16M4 12h16M4 17h16",
			strokeLinecap: "round"
		})
	});
}
function IconClose({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.6",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M6 6l12 12M18 6L6 18",
			strokeLinecap: "round"
		})
	});
}
function IconDownload({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.6",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M12 4v12m0 0 4.5-4.5M12 16 7.5 11.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M5 19h14",
			strokeLinecap: "round"
		})]
	});
}
function IconTruck({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.6",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M3 7.5h11.5V16H8",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M14.5 10h4.2L21 13.2V16h-6.5v-6Z",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "6.5",
				cy: "16.5",
				r: "1.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "17.2",
				cy: "16.5",
				r: "1.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8.2 16.5h7.3",
				strokeLinecap: "round"
			})
		]
	});
}
function IconRefresh({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.6",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M20 12a8 8 0 1 1-2.2-5.5",
			strokeLinecap: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M20 5.5V12h-6.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	});
}
function IconPay({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.6",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "6",
				width: "18",
				height: "12",
				rx: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 10h18" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M7 15h3.5",
				strokeLinecap: "round"
			})
		]
	});
}
function IconPin({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.6",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 21s6.5-5.2 6.5-10.2A6.5 6.5 0 0 0 12 4.3a6.5 6.5 0 0 0-6.5 6.5C5.5 15.8 12 21 12 21Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "10.6",
			r: "2.1"
		})]
	});
}
function IconClock({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.6",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "8"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M12 8.5V12l3 2",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	});
}
function IconArrow({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.6",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M5 12h14M13 6l6 6-6 6",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const { t } = useLocale();
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-40 border-b bg-ivory/92 backdrop-blur-md transition-[border-color,box-shadow] duration-200", scrolled ? "border-sand shadow-[0_8px_24px_-20px_rgb(42_34_24_/_0.6)]" : "border-sand/70"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-[4.6rem] max-w-6xl items-center justify-between gap-3 px-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#inicio",
						className: "flex shrink-0 items-center",
						"aria-label": "Kafao",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-10 w-auto sm:h-12" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-7 lg:flex",
						"aria-label": t.navAria,
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							className: "font-sans text-[0.72rem] font-semibold tracking-[0.18em] text-ink-soft uppercase transition-colors duration-150 hover:text-gold-deep",
							children: t.nav[item.id]
						}, item.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex shrink-0 items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangSwitch, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline-flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: waLink(t.waFloat.text),
									target: "_blank",
									rel: "noreferrer",
									className: "btn btn-gold min-h-10 px-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconWhatsApp, { className: "size-4" }), t.write]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "inline-flex size-11 items-center justify-center rounded-full border border-sand text-ink lg:hidden",
								"aria-expanded": open,
								"aria-controls": "menu-movil",
								"aria-label": open ? t.closeMenu : t.openMenu,
								onClick: () => setOpen((v) => !v),
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconClose, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconMenu, { className: "size-5" })
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "menu-movil",
				className: cn("lg:hidden", "overflow-hidden border-t border-sand bg-ivory transition-[max-height,opacity] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)]", open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col gap-1 px-6 py-5",
					"aria-label": t.mobileAria,
					children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						onClick: () => setOpen(false),
						className: "font-display py-3 text-2xl text-ink",
						children: t.nav[item.id]
					}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: waLink(t.waFloat.text),
						target: "_blank",
						rel: "noreferrer",
						className: "btn btn-gold mt-3 w-full",
						onClick: () => setOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconWhatsApp, { className: "size-4" }), "WhatsApp"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "kafao-ribbon",
				"aria-hidden": "true"
			})
		]
	});
}
function Hero() {
	const { t } = useLocale();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "inicio",
		className: "relative isolate min-h-[calc(100svh-4.6rem)] overflow-hidden bg-cacao",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: HERO.image,
				alt: t.hero.alt,
				className: "absolute inset-0 size-full object-cover object-[center_20%]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-cacao/80 via-cacao/45 to-cacao/15" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-cacao/75 via-transparent to-cacao/25" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-copy relative mx-auto flex min-h-[calc(100svh-4.6rem)] max-w-6xl flex-col justify-end px-4 py-16 sm:px-6 sm:py-20 lg:justify-center lg:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold-soft",
						children: t.hero.eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule my-5 bg-gold-soft" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "max-w-xl font-display text-[2.6rem] leading-[1.05] text-ivory sm:text-6xl lg:text-7xl",
						children: t.hero.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-md text-base leading-relaxed text-ivory/85 sm:text-lg",
						children: t.hero.subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: HERO.ctaHref,
							className: "btn btn-gold",
							children: t.hero.cta
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contacto",
							className: "btn btn-outline-ivory",
							children: t.hero.talk
						})]
					})
				]
			})
		]
	});
}
function SectionMark({ kicker }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "section-mark",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "section-mark__rule" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "section-mark__diamond" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "section-mark__diamond" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "section-mark__rule" })
		]
	});
}
function CatalogSection() {
	const { t } = useLocale();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "catalogo",
		className: "section py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionMark, { kicker: t.catalog.kicker }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl text-ink sm:text-5xl",
							children: t.catalog.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule my-6" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md text-base leading-relaxed text-ink-soft",
							children: t.catalog.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: CATALOG.pdfHref,
							download: "Catalogo-Kafao-Andes-2026.pdf",
							className: "btn btn-gold mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconDownload, { className: "size-4" }), t.catalog.download]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm text-sm text-ink-mute",
							children: t.catalog.pdfNote
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-3 -z-10 rounded-[1.6rem] bg-sand/50" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "catalog-cover overflow-hidden rounded-xl bg-cacao shadow-[var(--shadow-card)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: CATALOG.cover,
									alt: t.catalog.coverAlt,
									className: "aspect-[3/4] w-full object-cover object-center",
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
									className: "catalog-cover__caption",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "eyebrow text-gold-soft",
											children: t.catalog.eyebrow
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display mt-2 text-3xl leading-none text-ivory sm:text-4xl",
											children: t.catalog.coverTitle
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm tracking-wide text-ivory/75",
											children: CATALOG.edition
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-center text-xs tracking-[0.18em] text-ink-mute uppercase",
								children: t.catalog.eyebrow
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "campaign mt-16 overflow-hidden rounded-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: CATALOG.campaign,
							alt: t.catalog.campaignAlt,
							loading: "lazy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "campaign__veil" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "campaign__copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-gold-soft",
									children: t.catalog.campaignKicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display mt-3 max-w-lg text-4xl leading-tight text-ivory sm:text-5xl",
									children: t.catalog.campaignTitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-md text-sm leading-relaxed text-ivory/80 sm:text-base",
									children: t.catalog.campaignBody
								})
							]
						})
					]
				})
			]
		})
	});
}
var FILTERS = [
	"todos",
	"mujer",
	"hombre",
	"Ponchos",
	"Chompas",
	"Pantalones",
	"Accesorios"
];
function matches(product, filter) {
	if (filter === "todos") return true;
	if (filter === "mujer") return product.wearer === "Mujer" || product.wearer === "Unisex";
	if (filter === "hombre") return product.wearer === "Hombre" || product.wearer === "Unisex";
	return product.category === filter;
}
function ProductGallery() {
	const [filter, setFilter] = (0, import_react.useState)("todos");
	const [selected, setSelected] = (0, import_react.useState)(null);
	const { t, locale } = useLocale();
	const items = (0, import_react.useMemo)(() => PRODUCTS.filter((p) => matches(p, filter)), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "coleccion",
		className: "section pb-20 sm:pb-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionMark, { kicker: t.gallery.kicker }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl text-ink sm:text-5xl",
						children: t.gallery.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-md text-ink-soft",
						children: t.gallery.body
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						role: "tablist",
						"aria-label": t.gallery.filterAria,
						children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "tab",
							"aria-selected": filter === f,
							onClick: () => setFilter(f),
							className: cn("filter-pill", filter === f && "filter-pill--on"),
							children: t.filters[f]
						}, f))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: items.map((product) => {
						const copy = t.products[product.id];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setSelected(product),
							className: "product-card group w-full text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "product-card__media",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: product.image,
											alt: `${copy.name}, ${t.wearer[product.wearer]}`,
											width: 1200,
											height: 1600,
											loading: "lazy"
										}),
										product.compareAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "sale-badge",
											children: t.gallery.sale
										}) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "wearer-badge",
											children: t.wearer[product.wearer]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "product-card__hint",
											children: [t.gallery.detail, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconArrow, { className: "size-3.5" })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-4 block text-xs tracking-[0.18em] text-ink-mute uppercase",
									children: [
										product.origin,
										" · ",
										t.category[product.category],
										" · ",
										t.wearer[product.wearer]
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display mt-1 text-2xl text-ink",
									children: copy.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Price, {
									product,
									locale
								})
							]
						}) }) }, product.id);
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: selected !== null,
			onOpenChange: (open) => {
				if (!open) setSelected(null);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "dialog-overlay" }), selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "dialog-content",
				"aria-describedby": "product-desc",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: selected.image,
						alt: t.products[selected.id].name,
						className: "aspect-[4/5] h-full w-full object-cover md:aspect-auto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col p-6 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow",
								children: [
									selected.origin,
									" · ",
									t.category[selected.category],
									" · ",
									t.wearer[selected.wearer]
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "font-display mt-3 text-3xl text-ink sm:text-4xl",
								children: t.products[selected.id].name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule my-5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
								id: "product-desc",
								className: "text-ink-soft",
								children: t.products[selected.id].description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Price, {
									product: selected,
									locale,
									large: true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: waLink(t.gallery.wa(t.products[selected.id].name, formatUsd(selected.price, locale), t.wearer[selected.wearer].toLowerCase())),
								target: "_blank",
								rel: "noreferrer",
								className: "btn btn-gold mt-8 w-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconWhatsApp, { className: "size-4" }), t.gallery.ask]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-center text-xs text-ink-mute",
								children: t.gallery.askNote
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
					className: "dialog-close",
					"aria-label": t.closeMenu,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconClose, { className: "size-5" })
				})]
			}) : null] })
		})]
	});
}
function Price({ product, locale, large }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: cn("mt-2 flex items-baseline gap-2 tabular-nums", large ? "text-2xl" : "text-base"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-medium text-gold-deep",
			children: formatUsd(product.price, locale)
		}), product.compareAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm text-ink-mute line-through",
			children: formatUsd(product.compareAt, locale)
		}) : null]
	});
}
function remaining(until) {
	const diff = new Date(until).getTime() - Date.now();
	if (diff <= 0) return null;
	return {
		days: Math.floor(diff / 864e5),
		hours: Math.floor(diff % 864e5 / 36e5),
		mins: Math.floor(diff % 36e5 / 6e4),
		secs: Math.floor(diff % 6e4 / 1e3)
	};
}
function pad(n) {
	return String(n).padStart(2, "0");
}
function PromoSection() {
	const [left, setLeft] = (0, import_react.useState)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	const { t } = useLocale();
	(0, import_react.useEffect)(() => {
		const tick = () => setLeft(remaining(PROMO.endsAt));
		tick();
		setReady(true);
		const id = window.setInterval(tick, 1e3);
		return () => window.clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "promociones",
		className: "section pb-20 sm:pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionMark, { kicker: t.promo.mark }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "promo-banner mt-10 overflow-hidden rounded-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: PROMO.image,
						alt: t.promo.alt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "promo-banner__veil" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "promo-banner__copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-gold-soft",
								children: t.promo.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display mt-4 max-w-xl text-3xl leading-tight text-ivory sm:text-5xl",
								children: t.promo.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 font-display text-2xl text-gold-soft italic",
								children: t.promo.body
							}),
							ready && left ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								"aria-label": t.promo.remainAria,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeBox, {
										label: t.promo.days,
										value: pad(left.days)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeBox, {
										label: t.promo.hours,
										value: pad(left.hours)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeBox, {
										label: t.promo.mins,
										value: pad(left.mins)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeBox, {
										label: t.promo.secs,
										value: pad(left.secs)
									})
								]
							}) : ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-ivory/80",
								children: t.promo.ended
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: PROMO.ctaHref,
								className: "btn btn-gold mt-8",
								children: [t.promo.cta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconArrow, { className: "size-4" })]
							})
						]
					})
				]
			})]
		})
	});
}
function TimeBox({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "time-box",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-2xl text-ivory tabular-nums sm:text-3xl",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "time-label",
			children: label
		})]
	});
}
var ICONS = {
	envios: IconTruck,
	cambios: IconRefresh,
	pagos: IconPay
};
function PoliciesSection() {
	const { t } = useLocale();
	const items = [
		{
			id: "envios",
			...t.policies.items.envios
		},
		{
			id: "cambios",
			...t.policies.items.cambios
		},
		{
			id: "pagos",
			...t.policies.items.pagos
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "politicas",
		className: "section pb-20 sm:pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionMark, { kicker: t.policies.kicker }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-8 max-w-xl text-4xl text-ink sm:text-5xl",
					children: t.policies.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-lg text-ink-soft",
					children: t.policies.lead
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-12 grid gap-5 md:grid-cols-3",
					children: items.map((policy) => {
						const Icon = ICONS[policy.id];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "policy-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "policy-card__icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display mt-5 text-2xl text-ink",
									children: policy.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-ink-soft",
									children: policy.body
								})
							]
						}, policy.id);
					})
				})
			]
		})
	});
}
function ContactSection() {
	const { t, locale } = useLocale();
	const [name, setName] = (0, import_react.useState)("");
	const [topicId, setTopicId] = (0, import_react.useState)(t.topics[0].id);
	const [message, setMessage] = (0, import_react.useState)("");
	const topic = t.topics.find((x) => x.id === topicId) ?? t.topics[0];
	function onSubmit(e) {
		e.preventDefault();
		const who = name.trim() || (locale === "en" ? "a client" : "un cliente");
		window.open(waLink(t.contact.wa(who, topic.value, message.trim())), "_blank", "noopener,noreferrer");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contacto",
		className: "section pb-20 sm:pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionMark, { kicker: t.contact.kicker }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl text-ink sm:text-5xl",
						children: t.contact.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule my-6" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-md text-ink-soft",
						children: t.contact.note
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-8 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconPin, { className: "mt-0.5 size-5 shrink-0 text-gold-deep" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: CONTACT.place })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconClock, { className: "mt-0.5 size-5 shrink-0 text-gold-deep" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.contact.hours })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconWhatsApp, { className: "mt-0.5 size-5 shrink-0 text-gold-deep" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: waLink(t.waFloat.text),
									target: "_blank",
									rel: "noreferrer",
									className: "hover:text-gold-deep",
									children: WHATSAPP_NUMBER_DISPLAY
								})]
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "contact-form",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl text-ink",
							children: t.contact.formTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-ink-mute",
							children: t.contact.formLead
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-6 block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "field-label",
								children: t.contact.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "field",
								type: "text",
								name: "nombre",
								autoComplete: "name",
								placeholder: t.contact.namePh,
								value: name,
								onChange: (e) => setName(e.target.value)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-4 block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "field-label",
								children: t.contact.interest
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: "field",
								name: "interes",
								value: topicId,
								onChange: (e) => setTopicId(e.target.value),
								children: t.topics.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: item.id,
									children: item.label
								}, item.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-4 block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "field-label",
								children: t.contact.message
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								className: "field min-h-28 resize-y",
								name: "mensaje",
								rows: 4,
								placeholder: t.contact.messagePh,
								value: message,
								onChange: (e) => setMessage(e.target.value)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "btn btn-gold mt-6 w-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconWhatsApp, { className: "size-4" }), t.contact.send]
						})
					]
				})]
			})]
		})
	});
}
var SOCIAL_ICONS = {
	instagram: IconInstagram,
	tiktok: IconTikTok,
	facebook: IconFacebook
};
function SiteFooter() {
	const { t } = useLocale();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "site-footer",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "kafao-ribbon",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#inicio",
						"aria-label": "Kafao",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-11 w-auto sm:h-12" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xs text-sm leading-relaxed text-ivory/70",
						children: t.footer.blurb
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold-soft",
						children: t.footer.nav
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							className: "footer-link",
							children: t.nav[item.id]
						}) }, item.href))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold-soft",
						children: t.footer.socials
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3",
						children: [SOCIALS.map((s) => {
							const Icon = SOCIAL_ICONS[s.id];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: s.href,
								target: "_blank",
								rel: "noreferrer",
								className: "footer-social",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs tracking-[0.14em] text-ivory/50 uppercase",
									children: s.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.handle })] })]
							}) }, s.id);
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: waLink(t.waFloat.text),
							target: "_blank",
							rel: "noreferrer",
							className: "footer-social",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconWhatsApp, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs tracking-[0.14em] text-ivory/50 uppercase",
								children: "WhatsApp"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: WHATSAPP_NUMBER_DISPLAY })] })]
						}) })]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-ivory/10 px-4 py-5 text-center text-xs tracking-[0.16em] text-ivory/45 uppercase sm:px-6",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Kafao · ",
					t.footer.legal
				]
			})
		]
	});
}
function WhatsAppFloat() {
	const { t } = useLocale();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: waLink(t.waFloat.text),
		target: "_blank",
		rel: "noreferrer",
		className: "wa-float",
		"aria-label": t.waFloat.aria,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconWhatsApp, {
			className: "relative z-10 size-7",
			title: ""
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "wa-float__tip",
			children: t.waFloat.tip
		})]
	});
}
/**
* Página informativa de Kafao.
* Textos: src/lib/copy.ts  ·  Precios/fotos: src/lib/site-data.ts
*/
function Home() {
	const { t } = useLocale();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteBackground, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "site-shell",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#contenido",
				className: "skip-link",
				children: t.skip
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "contenido",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatalogSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGallery, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromoSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PoliciesSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {})
		]
	})] });
}
//#endregion
export { Home as component };
