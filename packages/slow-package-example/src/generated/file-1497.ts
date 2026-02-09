export type Thing1497<T> = T extends infer U ? U[] : never;

export const value1497: Thing1497<number> = [1497];
