export type Thing1247<T> = T extends infer U ? U[] : never;

export const value1247: Thing1247<number> = [1247];
