export type Thing1263<T> = T extends infer U ? U[] : never;

export const value1263: Thing1263<number> = [1263];
