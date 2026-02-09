export type Thing1891<T> = T extends infer U ? U[] : never;

export const value1891: Thing1891<number> = [1891];
