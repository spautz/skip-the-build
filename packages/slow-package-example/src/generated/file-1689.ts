export type Thing1689<T> = T extends infer U ? U[] : never;

export const value1689: Thing1689<number> = [1689];
