export type Thing1465<T> = T extends infer U ? U[] : never;

export const value1465: Thing1465<number> = [1465];
