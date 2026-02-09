export type Thing1351<T> = T extends infer U ? U[] : never;

export const value1351: Thing1351<number> = [1351];
