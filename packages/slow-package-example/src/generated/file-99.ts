export type Thing99<T> = T extends infer U ? U[] : never;

export const value99: Thing99<number> = [99];
