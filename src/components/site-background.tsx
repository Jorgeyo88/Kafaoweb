/**
 * Fondo andino de toda la página.
 * Fotos: /public/images/texture.jpg
 * Greca: /public/patterns/andino.svg
 */
export function SiteBackground() {
  return (
    <div className="site-bg" aria-hidden="true">
      <div className="site-bg__weave" />
      <div className="site-bg__greca" />
    </div>
  );
}
