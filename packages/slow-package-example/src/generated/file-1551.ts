export type Thing1551<T> = T extends infer U ? U[] : never;

export const value1551: Thing1551<number> = [1551];
