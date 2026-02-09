export type Thing1178<T> = T extends infer U ? U[] : never;

export const value1178: Thing1178<number> = [1178];
