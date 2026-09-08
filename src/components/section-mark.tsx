export function SectionMark({ kicker }: { kicker: string }) {
  return (
    <div className="section-mark">
      <span className="section-mark__rule" />
      <span className="section-mark__diamond" />
      <p className="eyebrow">{kicker}</p>
      <span className="section-mark__diamond" />
      <span className="section-mark__rule" />
    </div>
  );
}
