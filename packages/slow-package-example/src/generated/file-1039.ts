export type Thing1039<T> = T extends infer U ? U[] : never;

export const value1039: Thing1039<number> = [1039];
