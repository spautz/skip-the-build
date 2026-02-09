export type Thing633<T> = T extends infer U ? U[] : never;

export const value633: Thing633<number> = [633];
