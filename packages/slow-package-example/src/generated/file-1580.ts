export type Thing1580<T> = T extends infer U ? U[] : never;

export const value1580: Thing1580<number> = [1580];
