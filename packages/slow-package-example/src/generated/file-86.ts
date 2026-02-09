export type Thing86<T> = T extends infer U ? U[] : never;

export const value86: Thing86<number> = [86];
