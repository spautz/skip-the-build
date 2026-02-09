export type Thing1709<T> = T extends infer U ? U[] : never;

export const value1709: Thing1709<number> = [1709];
