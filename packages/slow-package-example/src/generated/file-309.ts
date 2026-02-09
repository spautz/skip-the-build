export type Thing309<T> = T extends infer U ? U[] : never;

export const value309: Thing309<number> = [309];
