export type Thing1434<T> = T extends infer U ? U[] : never;

export const value1434: Thing1434<number> = [1434];
