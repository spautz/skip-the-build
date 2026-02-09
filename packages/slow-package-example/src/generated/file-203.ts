export type Thing203<T> = T extends infer U ? U[] : never;

export const value203: Thing203<number> = [203];
