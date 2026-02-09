export type Thing1903<T> = T extends infer U ? U[] : never;

export const value1903: Thing1903<number> = [1903];
