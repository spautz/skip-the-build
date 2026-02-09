export type Thing1834<T> = T extends infer U ? U[] : never;

export const value1834: Thing1834<number> = [1834];
