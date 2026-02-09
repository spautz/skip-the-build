export type Thing1760<T> = T extends infer U ? U[] : never;

export const value1760: Thing1760<number> = [1760];
