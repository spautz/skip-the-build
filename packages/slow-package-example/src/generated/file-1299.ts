export type Thing1299<T> = T extends infer U ? U[] : never;

export const value1299: Thing1299<number> = [1299];
