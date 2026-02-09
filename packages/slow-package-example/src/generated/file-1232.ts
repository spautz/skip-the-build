export type Thing1232<T> = T extends infer U ? U[] : never;

export const value1232: Thing1232<number> = [1232];
