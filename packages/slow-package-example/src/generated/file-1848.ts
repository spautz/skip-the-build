export type Thing1848<T> = T extends infer U ? U[] : never;

export const value1848: Thing1848<number> = [1848];
