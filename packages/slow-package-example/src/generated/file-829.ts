export type Thing829<T> = T extends infer U ? U[] : never;

export const value829: Thing829<number> = [829];
