export type Thing1730<T> = T extends infer U ? U[] : never;

export const value1730: Thing1730<number> = [1730];
