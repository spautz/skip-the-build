export type Thing1169<T> = T extends infer U ? U[] : never;

export const value1169: Thing1169<number> = [1169];
