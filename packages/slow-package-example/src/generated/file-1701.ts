export type Thing1701<T> = T extends infer U ? U[] : never;

export const value1701: Thing1701<number> = [1701];
