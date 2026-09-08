import { createFileRoute } from "@tanstack/react-router";
import { SiteBackground } from "@/components/site-background";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { CatalogSection } from "@/components/catalog-section";
import { ProductGallery } from "@/components/product-gallery";
import { PromoSection } from "@/components/promo-section";
import { PoliciesSection } from "@/components/policies-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { useLocale } from "@/lib/locale";

/**
 * Página informativa de Kafao.
 * Textos: src/lib/copy.ts  ·  Precios/fotos: src/lib/site-data.ts
 */
export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { t } = useLocale();
  return (
    <>
      <SiteBackground />
      <div className="site-shell">
        <a href="#contenido" className="skip-link">
          {t.skip}
        </a>

        {/* ========== SECCIÓN HEADER ========== */}
        <SiteHeader />

        <main id="contenido">
          {/* ========== SECCIÓN HERO ========== */}
          <Hero />

          {/* ========== SECCIÓN CATÁLOGO DESCARGABLE ========== */}
          <CatalogSection />

          {/* ========== SECCIÓN GALERÍA DE PRODUCTOS ========== */}
          <ProductGallery />

          {/* ========== SECCIÓN PROMOCIONES ========== */}
          <PromoSection />

          {/* ========== SECCIÓN POLÍTICAS DE VENTAS ========== */}
          <PoliciesSection />

          {/* ========== SECCIÓN CONTACTO ========== */}
          <ContactSection />
        </main>

        {/* ========== SECCIÓN FOOTER Y REDES SOCIALES ========== */}
        <SiteFooter />

        {/* ========== WHATSAPP FLOTANTE ========== */}
        <WhatsAppFloat />
      </div>
    </>
  );
}
