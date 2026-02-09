export type Thing943<T> = T extends infer U ? U[] : never;

export const value943: Thing943<number> = [943];
