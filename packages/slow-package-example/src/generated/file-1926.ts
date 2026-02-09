export type Thing1926<T> = T extends infer U ? U[] : never;

export const value1926: Thing1926<number> = [1926];
