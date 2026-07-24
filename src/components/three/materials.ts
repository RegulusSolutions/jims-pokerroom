import * as THREE from 'three';

export const GOLD = '#C9A227';
export const GOLD_LIGHT = '#F0DFA8';
export const INK = '#050506';

/** Face texture for a playing card, drawn to a canvas so the build ships
 *  with no image assets. Gold pips on bone stock, black-and-gold only. */
export function cardFaceTexture(rank: string, suit: string) {
  const c = document.createElement('canvas');
  c.width = 384;
  c.height = 538;
  const x = c.getContext('2d')!;

  x.fillStyle = '#F4F0E6';
  x.fillRect(0, 0, 384, 538);

  x.fillStyle = suit === '\u2666' || suit === '\u2665' ? '#A8842A' : '#141018';
  x.textAlign = 'left';
  x.font = '600 92px Georgia, serif';
  x.fillText(rank, 30, 110);
  x.font = '66px Georgia, serif';
  x.fillText(suit, 33, 178);

  x.save();
  x.translate(384, 538);
  x.rotate(Math.PI);
  x.font = '600 92px Georgia, serif';
  x.fillText(rank, 30, 110);
  x.font = '66px Georgia, serif';
  x.fillText(suit, 33, 178);
  x.restore();

  x.textAlign = 'center';
  x.font = '216px Georgia, serif';
  x.globalAlpha = 0.94;
  x.fillText(suit, 192, 342);
  x.globalAlpha = 1;

  x.strokeStyle = 'rgba(201,162,39,.6)';
  x.lineWidth = 4;
  x.strokeRect(14, 14, 356, 510);

  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

/** Card back: black stock, gold guilloché lattice, monogram J. */
export function cardBackTexture() {
  const c = document.createElement('canvas');
  c.width = 384;
  c.height = 538;
  const x = c.getContext('2d')!;

  const g = x.createLinearGradient(0, 0, 384, 538);
  g.addColorStop(0, '#131316');
  g.addColorStop(1, '#050506');
  x.fillStyle = g;
  x.fillRect(0, 0, 384, 538);

  x.strokeStyle = 'rgba(201,162,39,.16)';
  x.lineWidth = 2;
  for (let i = -538; i < 384; i += 20) {
    x.beginPath(); x.moveTo(i, 0); x.lineTo(i + 538, 538); x.stroke();
    x.beginPath(); x.moveTo(384 - i, 0); x.lineTo(384 - i - 538, 538); x.stroke();
  }

  x.strokeStyle = 'rgba(201,162,39,.55)';
  x.lineWidth = 5;
  x.strokeRect(20, 20, 344, 498);

  x.fillStyle = 'rgba(240,223,168,.92)';
  x.textAlign = 'center';
  x.font = 'italic 132px Georgia, serif';
  x.fillText('J', 192, 322);

  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

/** Rounded-rectangle "racetrack" outline used for the felt and rail. */
export function racetrack(w: number, h: number, r: number) {
  const s = new THREE.Shape();
  s.moveTo(-w + r, -h);
  s.lineTo(w - r, -h);
  s.quadraticCurveTo(w, -h, w, -h + r);
  s.lineTo(w, h - r);
  s.quadraticCurveTo(w, h, w - r, h);
  s.lineTo(-w + r, h);
  s.quadraticCurveTo(-w, h, -w, h - r);
  s.lineTo(-w, -h + r);
  s.quadraticCurveTo(-w, -h, -w + r, -h);
  return s;
}
