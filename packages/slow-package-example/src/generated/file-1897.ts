export type Thing1897<T> = T extends infer U ? U[] : never;

export const value1897: Thing1897<number> = [1897];
