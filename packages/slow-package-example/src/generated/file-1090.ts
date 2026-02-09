export type Thing1090<T> = T extends infer U ? U[] : never;

export const value1090: Thing1090<number> = [1090];
