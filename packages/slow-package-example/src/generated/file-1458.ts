export type Thing1458<T> = T extends infer U ? U[] : never;

export const value1458: Thing1458<number> = [1458];
