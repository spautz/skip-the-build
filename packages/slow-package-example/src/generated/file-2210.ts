export type Thing2210<T> = T extends infer U ? U[] : never;

export const value2210: Thing2210<number> = [2210];
