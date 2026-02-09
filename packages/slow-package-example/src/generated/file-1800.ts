export type Thing1800<T> = T extends infer U ? U[] : never;

export const value1800: Thing1800<number> = [1800];
