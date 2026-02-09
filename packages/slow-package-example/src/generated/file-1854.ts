export type Thing1854<T> = T extends infer U ? U[] : never;

export const value1854: Thing1854<number> = [1854];
