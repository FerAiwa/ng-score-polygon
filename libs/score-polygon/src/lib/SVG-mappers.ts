import { Point, ScorePolygon } from './score-polygon';

export function poinToSVGLine({ x, y }: Point): string {
  return `${x},${y} `;
}

export function polygonToSVGPath(points: Point[]): string {
  return points.map(poinToSVGLine).join(' ');
}

export function scoresToSVGPolygon(scores: number[], polygonWidth = 200) {
  return polygonToSVGPath(
    new ScorePolygon({ width: polygonWidth, scores }).points
  );
}
