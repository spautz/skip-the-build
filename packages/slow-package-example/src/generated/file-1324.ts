export type Thing1324<T> = T extends infer U ? U[] : never;

export const value1324: Thing1324<number> = [1324];
