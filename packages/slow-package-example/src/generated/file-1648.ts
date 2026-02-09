export type Thing1648<T> = T extends infer U ? U[] : never;

export const value1648: Thing1648<number> = [1648];
