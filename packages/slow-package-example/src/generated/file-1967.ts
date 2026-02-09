export type Thing1967<T> = T extends infer U ? U[] : never;

export const value1967: Thing1967<number> = [1967];
