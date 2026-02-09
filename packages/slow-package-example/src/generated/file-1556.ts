export type Thing1556<T> = T extends infer U ? U[] : never;

export const value1556: Thing1556<number> = [1556];
