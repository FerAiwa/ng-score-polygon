export interface Point {
  x: number;
  y: number;
}
export interface PolygonConfig {
  width: number;
  scores: any[];
}

/**
 * Creates a polygon based on scaled scores in a range of 0-10.
 * Having n vortex, equal to the number of scores provided.
 **/
export class ScorePolygon {
  private faces: number;
  private THETHA: number;
  private RADIUS: number;
  public points: Point[];

  constructor(config: PolygonConfig) {
    this.faces = config.scores.length;
    this.RADIUS = config.width / 2;
    this.THETHA = 360 / this.faces;

    this.points = config.scores.map((score, i) => this.scoreToVortex(score, i));
  }

  scoreToVortex(score: number, index: number) {
    const angle = angleToRadians(this.THETHA * index);
    const TOPCENTERCORRECTION = 33;
    return {
      x: Math.cos(angle - TOPCENTERCORRECTION) * score * (this.RADIUS / 10),
      y: Math.sin(angle - TOPCENTERCORRECTION) * score * (this.RADIUS / 10)
    };
  }
}

export function angleToRadians(angle) {
  return angle * (Math.PI / 180);
}

export function scaleScore(rawScore: number, maxScore = 10, scale = 10) {
  return ((rawScore * scale) / maxScore).toFixed(2);
}
