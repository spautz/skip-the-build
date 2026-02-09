export type Thing1258<T> = T extends infer U ? U[] : never;

export const value1258: Thing1258<number> = [1258];
