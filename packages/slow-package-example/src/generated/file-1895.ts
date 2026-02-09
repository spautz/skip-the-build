export type Thing1895<T> = T extends infer U ? U[] : never;

export const value1895: Thing1895<number> = [1895];
