export type Thing1890<T> = T extends infer U ? U[] : never;

export const value1890: Thing1890<number> = [1890];
