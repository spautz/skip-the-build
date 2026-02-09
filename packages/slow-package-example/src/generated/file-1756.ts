export type Thing1756<T> = T extends infer U ? U[] : never;

export const value1756: Thing1756<number> = [1756];
