export type Thing1908<T> = T extends infer U ? U[] : never;

export const value1908: Thing1908<number> = [1908];
