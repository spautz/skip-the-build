export type Thing1918<T> = T extends infer U ? U[] : never;

export const value1918: Thing1918<number> = [1918];
