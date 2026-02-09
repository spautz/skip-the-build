export type Thing1386<T> = T extends infer U ? U[] : never;

export const value1386: Thing1386<number> = [1386];
