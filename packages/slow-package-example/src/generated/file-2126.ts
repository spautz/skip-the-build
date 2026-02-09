export type Thing2126<T> = T extends infer U ? U[] : never;

export const value2126: Thing2126<number> = [2126];
