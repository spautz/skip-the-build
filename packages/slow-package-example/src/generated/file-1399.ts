export type Thing1399<T> = T extends infer U ? U[] : never;

export const value1399: Thing1399<number> = [1399];
