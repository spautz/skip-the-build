export type Thing6<T> = T extends infer U ? U[] : never;

export const value6: Thing6<number> = [6];
