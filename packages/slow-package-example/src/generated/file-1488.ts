export type Thing1488<T> = T extends infer U ? U[] : never;

export const value1488: Thing1488<number> = [1488];
