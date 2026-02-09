export type Thing1877<T> = T extends infer U ? U[] : never;

export const value1877: Thing1877<number> = [1877];
