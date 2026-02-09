export type Thing1670<T> = T extends infer U ? U[] : never;

export const value1670: Thing1670<number> = [1670];
