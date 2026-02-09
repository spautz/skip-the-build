export type Thing1806<T> = T extends infer U ? U[] : never;

export const value1806: Thing1806<number> = [1806];
