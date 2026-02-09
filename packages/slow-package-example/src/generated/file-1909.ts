export type Thing1909<T> = T extends infer U ? U[] : never;

export const value1909: Thing1909<number> = [1909];
