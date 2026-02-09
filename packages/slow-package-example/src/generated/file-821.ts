export type Thing821<T> = T extends infer U ? U[] : never;

export const value821: Thing821<number> = [821];
