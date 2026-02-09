export type Thing355<T> = T extends infer U ? U[] : never;

export const value355: Thing355<number> = [355];
