export type Thing1812<T> = T extends infer U ? U[] : never;

export const value1812: Thing1812<number> = [1812];
