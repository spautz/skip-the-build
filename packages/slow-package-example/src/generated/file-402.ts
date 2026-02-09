export type Thing402<T> = T extends infer U ? U[] : never;

export const value402: Thing402<number> = [402];
