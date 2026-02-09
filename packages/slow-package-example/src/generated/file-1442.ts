export type Thing1442<T> = T extends infer U ? U[] : never;

export const value1442: Thing1442<number> = [1442];
