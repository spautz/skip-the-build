export type Thing1599<T> = T extends infer U ? U[] : never;

export const value1599: Thing1599<number> = [1599];
