export type Thing1527<T> = T extends infer U ? U[] : never;

export const value1527: Thing1527<number> = [1527];
