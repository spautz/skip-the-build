export type Thing1287<T> = T extends infer U ? U[] : never;

export const value1287: Thing1287<number> = [1287];
