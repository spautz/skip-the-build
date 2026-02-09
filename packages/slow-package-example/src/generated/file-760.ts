export type Thing760<T> = T extends infer U ? U[] : never;

export const value760: Thing760<number> = [760];
