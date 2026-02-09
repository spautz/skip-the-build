export type Thing1233<T> = T extends infer U ? U[] : never;

export const value1233: Thing1233<number> = [1233];
