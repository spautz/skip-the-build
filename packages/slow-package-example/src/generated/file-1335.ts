export type Thing1335<T> = T extends infer U ? U[] : never;

export const value1335: Thing1335<number> = [1335];
