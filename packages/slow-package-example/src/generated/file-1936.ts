export type Thing1936<T> = T extends infer U ? U[] : never;

export const value1936: Thing1936<number> = [1936];
