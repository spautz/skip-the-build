export type Thing54<T> = T extends infer U ? U[] : never;

export const value54: Thing54<number> = [54];
