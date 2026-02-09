export type Thing1924<T> = T extends infer U ? U[] : never;

export const value1924: Thing1924<number> = [1924];
