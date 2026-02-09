export type Thing1321<T> = T extends infer U ? U[] : never;

export const value1321: Thing1321<number> = [1321];
