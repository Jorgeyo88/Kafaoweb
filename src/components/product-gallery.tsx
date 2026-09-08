import { useMemo, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { PRODUCTS, type Category, type Product, waLink } from "@/lib/site-data";
import { formatUsd, cn } from "@/lib/utils";
import { useLocale } from "@/lib/locale";
import { IconArrow, IconClose, IconWhatsApp } from "@/components/icons";
import { SectionMark } from "@/components/section-mark";

const FILTERS = ["todos", "mujer", "hombre", "Ponchos", "Chompas", "Pantalones", "Accesorios", "Artesanias"] as const;
type Filter = (typeof FILTERS)[number];

function matches(product: Product, filter: Filter) {
  if (filter === "todos") return true;
  if (filter === "mujer") return product.wearer === "Mujer" || product.wearer === "Unisex";
  if (filter === "hombre") return product.wearer === "Hombre" || product.wearer === "Unisex";
  return product.category === (filter as Category);
}

/* ========== SECCIÓN GALERÍA DE PRODUCTOS ==========
   Edita PRODUCTS en src/lib/site-data.ts y textos en src/lib/copy.ts */
export function ProductGallery() {
  const [filter, setFilter] = useState<Filter>("todos");
  const [selected, setSelected] = useState<Product | null>(null);
  const { t, locale } = useLocale();

  const items = useMemo(() => PRODUCTS.filter((p) => matches(p, filter)), [filter]);

  return (
    <section id="coleccion" className="section pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionMark kicker={t.gallery.kicker} />
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-4xl text-ink sm:text-5xl">{t.gallery.title}</h2>
            <p className="mt-3 max-w-md text-ink-soft">{t.gallery.body}</p>
          </div>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label={t.gallery.filterAria}>
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={cn("filter-pill", filter === f && "filter-pill--on")}
              >
                {t.filters[f]}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((product) => {
            const copy = t.products[product.id];
            return (
              <li key={product.id}>
                <article>
                  <button
                    type="button"
                    onClick={() => setSelected(product)}
                    className="product-card group w-full text-left"
                  >
                    <span className="product-card__media">
                      <img
                        src={product.image}
                        alt={`${copy.name}, ${t.wearer[product.wearer]}`}
                        width={1200}
                        height={1600}
                        loading="lazy"
                      />
                      {product.compareAt ? <span className="sale-badge">{t.gallery.sale}</span> : null}
                      <span className="wearer-badge">{t.wearer[product.wearer]}</span>
                      <span className="product-card__hint">
                        {t.gallery.detail}
                        <IconArrow className="size-3.5" />
                      </span>
                    </span>
                    <span className="mt-4 block text-xs tracking-[0.18em] text-ink-mute uppercase">
                      {product.origin} · {t.category[product.category]} · {t.wearer[product.wearer]}
                    </span>
                    <h3 className="font-display mt-1 text-2xl text-ink">{copy.name}</h3>
                    <Price product={product} locale={locale} />
                  </button>
                </article>
              </li>
            );
          })}
        </ul>
      </div>

      <Dialog.Root
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="dialog-overlay" />
          {selected ? (
            <Dialog.Content className="dialog-content" aria-describedby="product-desc">
              <div className="grid md:grid-cols-2">
                <img
                  src={selected.image}
                  alt={t.products[selected.id].name}
                  className="aspect-[4/5] h-full w-full object-cover md:aspect-auto"
                />
                <div className="flex flex-col p-6 sm:p-8">
                  <p className="eyebrow">
                    {selected.origin} · {t.category[selected.category]} · {t.wearer[selected.wearer]}
                  </p>
                  <Dialog.Title className="font-display mt-3 text-3xl text-ink sm:text-4xl">
                    {t.products[selected.id].name}
                  </Dialog.Title>
                  <div className="gold-rule my-5" />
                  <Dialog.Description id="product-desc" className="text-ink-soft">
                    {t.products[selected.id].description}
                  </Dialog.Description>
                  <div className="mt-6">
                    <Price product={selected} locale={locale} large />
                  </div>
                  <a
                    href={waLink(
                      t.gallery.wa(
                        t.products[selected.id].name,
                        formatUsd(selected.price, locale),
                        t.wearer[selected.wearer].toLowerCase(),
                      ),
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-gold mt-8 w-full"
                  >
                    <IconWhatsApp className="size-4" />
                    {t.gallery.ask}
                  </a>
                  <p className="mt-3 text-center text-xs text-ink-mute">{t.gallery.askNote}</p>
                </div>
              </div>
              <Dialog.Close className="dialog-close" aria-label={t.closeMenu}>
                <IconClose className="size-5" />
              </Dialog.Close>
            </Dialog.Content>
          ) : null}
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}

function Price({
  product,
  locale,
  large,
}: {
  product: Product;
  locale: "es" | "en";
  large?: boolean;
}) {
  return (
    <p className={cn("mt-2 flex items-baseline gap-2 tabular-nums", large ? "text-2xl" : "text-base")}>
      <span className="font-medium text-gold-deep">{formatUsd(product.price, locale)}</span>
      {product.compareAt ? (
        <span className="text-sm text-ink-mute line-through">{formatUsd(product.compareAt, locale)}</span>
      ) : null}
    </p>
  );
}
