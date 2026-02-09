export type Thing1029<T> = T extends infer U ? U[] : never;

export const value1029: Thing1029<number> = [1029];
