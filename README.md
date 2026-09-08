# Kafao — sitio web

Marca de ropa y accesorios artesanales de Ecuador. Sitio bilingüe (ES/EN).

WhatsApp: +593 96 263 3333  
Catálogo PDF: `public/catalogo-kafao.pdf`

---

## Publicar en internet (GitHub + Vercel)

Este no es un HTML suelto: va mejor en **Vercel** (gratis para este tipo de sitio), conectado a GitHub. **GitHub Pages no alcanza** para este proyecto.

1. Crea un repositorio en [github.com/new](https://github.com/new), por ejemplo `kafao-web`. Déjalo **público** o privado, da igual.
2. Sube esta carpeta (sin `node_modules`). En GitHub: **Add file → Upload files**, o con GitHub Desktop.
3. Entra a [vercel.com](https://vercel.com), inicia sesión **con GitHub** y pulsa **Add New → Project**.
4. Elige el repositorio `kafao-web` y **Deploy**.
5. En **Settings → Environment Variables** añade:
   - `VITE_AUTH_ENABLED` = `false`
6. Cada vez que subas un cambio a GitHub, Vercel republica solo. Te da una URL tipo `kafao-web.vercel.app` el mismo día.

---

## Comprar un dominio (kafao.ec, kafaomitico.com, etc.)

El hosting (Vercel) es gratis. El **nombre** se compra aparte, ~10–15 USD/año un `.com`, o un `.ec` en [nic.ec](https://www.nic.ec) / un registrador (~35 USD/año).

1. Busca si está libre: `kafao.com`, `kafaomitico.com`, `kafao.ec`.
2. Cómpralo 1 año (renueva antes de que caduque).
3. En Vercel: **Settings → Domains → Add** y pega el dominio.
4. Vercel te muestra qué poner en el DNS del registrador (casi siempre un registro `A` o `CNAME`). Guárdalo y espera de 10 minutos a unas horas.
5. HTTPS (candado) lo activa Vercel solo.

---

## Dónde cambiar fotos, precios y textos

No hace falta tocar el diseño. Edita estos archivos en GitHub (lápiz) o aquí en el chat.

| Qué quieres cambiar | Archivo |
| --- | --- |
| Precios, fotos de productos, WhatsApp, cuenta Pichincha, PDF | `src/lib/site-data.ts` |
| Textos en español e inglés (títulos, políticas, promo) | `src/lib/copy.ts` |
| Fotos (hero, productos, promo) | `public/images/` — **mismo nombre de archivo** |
| Logo | `public/logo.png` |
| Catálogo PDF | `public/catalogo-kafao.pdf` |

### Cambiar una foto
1. Prepara el JPG (mejor vertical, como 1200×1600).
2. En `public/images/` **reemplaza** el archivo con el mismo nombre (`pashmina-crema.jpg`, `hero.jpg`, `chompa-granada.jpg`…).
3. Si es un producto nuevo: añade la foto en `public/images/`, una entrada en `PRODUCTS` dentro de `site-data.ts`, y el nombre/descripción en `copy.ts` (bloque `es` y bloque `en`).

### Cambiar un precio o la cuenta
Abre `src/lib/site-data.ts` y busca `price`, `BANK` o `WHATSAPP_E164`.

Después de guardar, haz **commit** en GitHub. En 1–2 minutos el sitio en Vercel ya muestra el cambio.
