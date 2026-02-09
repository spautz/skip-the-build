export type Thing1028<T> = T extends infer U ? U[] : never;

export const value1028: Thing1028<number> = [1028];
