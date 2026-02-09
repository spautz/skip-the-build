export type Thing415<T> = T extends infer U ? U[] : never;

export const value415: Thing415<number> = [415];
