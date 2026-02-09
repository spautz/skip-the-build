export type Thing1948<T> = T extends infer U ? U[] : never;

export const value1948: Thing1948<number> = [1948];
