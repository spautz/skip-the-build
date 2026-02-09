export type Thing1963<T> = T extends infer U ? U[] : never;

export const value1963: Thing1963<number> = [1963];
