export type Thing1032<T> = T extends infer U ? U[] : never;

export const value1032: Thing1032<number> = [1032];
