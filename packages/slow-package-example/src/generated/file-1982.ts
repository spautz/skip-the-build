export type Thing1982<T> = T extends infer U ? U[] : never;

export const value1982: Thing1982<number> = [1982];
