export type Thing1973<T> = T extends infer U ? U[] : never;

export const value1973: Thing1973<number> = [1973];
