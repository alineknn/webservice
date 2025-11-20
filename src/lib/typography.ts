export function noOrphans(text: string, locale: string) {
  let out = text;

  // Unicode-safe left boundary: start or whitespace/punctuation where short words typically appear
  const LB = '(^|[\\s\\-–—\\(\\["\'«‹])';

  // English: articles, conjunctions, short prepositions
  const enWords = [
    "a","an","the",
    "and","or","but","nor","so","yet",
    "of","for","to","in","on","at","by","as","via","from","with","into","onto","per"
  ];
  // Match: left boundary + word + spaces before a non-space; replace spaces with NBSP
  const enRe = new RegExp(`${LB}(${enWords.join("|")})\\s+(?=\\S)`, "giu");
  out = out.replace(enRe, (_m, lead: string, w: string) => `${lead}${w}\u00A0`);

  // Russian: common short prepositions/particles
  const ruWords = [
    "и","а","но","ли","же","не","ни",
    "в","во","к","ко","с","со","у","о","об","от","по","за","на","из","для","при","без","над","под","про","до","через"
  ];
  const ruRe = new RegExp(`${LB}(${ruWords.join("|")})\\s+(?=\\S)`, "giu");
  out = out.replace(ruRe, (_m, lead: string, w: string) => `${lead}${w}\u00A0`);

  return out;
}