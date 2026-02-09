export type Thing1505<T> = T extends infer U ? U[] : never;

export const value1505: Thing1505<number> = [1505];
