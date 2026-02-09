export type Thing1064<T> = T extends infer U ? U[] : never;

export const value1064: Thing1064<number> = [1064];
