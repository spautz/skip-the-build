export type Thing625<T> = T extends infer U ? U[] : never;

export const value625: Thing625<number> = [625];
