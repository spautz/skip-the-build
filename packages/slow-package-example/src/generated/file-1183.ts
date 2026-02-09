export type Thing1183<T> = T extends infer U ? U[] : never;

export const value1183: Thing1183<number> = [1183];
