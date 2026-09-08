/** Logo de Kafao — sustituye /public/logo.png para actualizarlo en todo el sitio. */
export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return <img src="/logo.png" alt="Kafao" className={className} />;
}
