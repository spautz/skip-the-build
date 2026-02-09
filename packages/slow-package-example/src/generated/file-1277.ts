export type Thing1277<T> = T extends infer U ? U[] : never;

export const value1277: Thing1277<number> = [1277];
