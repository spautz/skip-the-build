export type Thing2632<T> = T extends infer U ? U[] : never;

export const value2632: Thing2632<number> = [2632];
