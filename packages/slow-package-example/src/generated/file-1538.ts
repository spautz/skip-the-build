export type Thing1538<T> = T extends infer U ? U[] : never;

export const value1538: Thing1538<number> = [1538];
