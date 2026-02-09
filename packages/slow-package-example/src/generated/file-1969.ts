export type Thing1969<T> = T extends infer U ? U[] : never;

export const value1969: Thing1969<number> = [1969];
