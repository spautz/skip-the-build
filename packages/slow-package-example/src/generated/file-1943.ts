export type Thing1943<T> = T extends infer U ? U[] : never;

export const value1943: Thing1943<number> = [1943];
