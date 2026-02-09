export type Thing1738<T> = T extends infer U ? U[] : never;

export const value1738: Thing1738<number> = [1738];
