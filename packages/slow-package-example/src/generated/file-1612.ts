export type Thing1612<T> = T extends infer U ? U[] : never;

export const value1612: Thing1612<number> = [1612];
