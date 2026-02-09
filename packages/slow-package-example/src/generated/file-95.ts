export type Thing95<T> = T extends infer U ? U[] : never;

export const value95: Thing95<number> = [95];
