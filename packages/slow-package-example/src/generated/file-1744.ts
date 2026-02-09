export type Thing1744<T> = T extends infer U ? U[] : never;

export const value1744: Thing1744<number> = [1744];
