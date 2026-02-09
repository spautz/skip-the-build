export type Thing1106<T> = T extends infer U ? U[] : never;

export const value1106: Thing1106<number> = [1106];
