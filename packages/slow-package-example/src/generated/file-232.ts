export type Thing232<T> = T extends infer U ? U[] : never;

export const value232: Thing232<number> = [232];
