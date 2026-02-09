export type Thing129<T> = T extends infer U ? U[] : never;

export const value129: Thing129<number> = [129];
