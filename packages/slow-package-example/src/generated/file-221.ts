export type Thing221<T> = T extends infer U ? U[] : never;

export const value221: Thing221<number> = [221];
