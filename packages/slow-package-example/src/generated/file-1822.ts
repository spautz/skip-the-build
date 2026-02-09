export type Thing1822<T> = T extends infer U ? U[] : never;

export const value1822: Thing1822<number> = [1822];
