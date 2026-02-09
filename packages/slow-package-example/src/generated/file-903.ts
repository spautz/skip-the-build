export type Thing903<T> = T extends infer U ? U[] : never;

export const value903: Thing903<number> = [903];
