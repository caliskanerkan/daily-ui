export enum ROUND {
  CIRCLE = 'circle',
  SQUARE = 'square',
}

export const Shape: Record<ROUND, string> = {
  circle: 'rounded-full',
  square: 'rounded-sm',
};
