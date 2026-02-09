export type Thing1876<T> = T extends infer U ? U[] : never;

export const value1876: Thing1876<number> = [1876];
