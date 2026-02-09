export type Thing206<T> = T extends infer U ? U[] : never;

export const value206: Thing206<number> = [206];
