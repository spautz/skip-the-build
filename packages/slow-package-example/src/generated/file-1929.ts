export type Thing1929<T> = T extends infer U ? U[] : never;

export const value1929: Thing1929<number> = [1929];
