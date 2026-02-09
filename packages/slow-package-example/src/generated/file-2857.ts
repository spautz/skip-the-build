export type Thing2857<T> = T extends infer U ? U[] : never;

export const value2857: Thing2857<number> = [2857];
