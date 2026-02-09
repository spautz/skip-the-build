export type Thing870<T> = T extends infer U ? U[] : never;

export const value870: Thing870<number> = [870];
