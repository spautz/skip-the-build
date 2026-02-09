export type Thing1932<T> = T extends infer U ? U[] : never;

export const value1932: Thing1932<number> = [1932];
