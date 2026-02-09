export type Thing123<T> = T extends infer U ? U[] : never;

export const value123: Thing123<number> = [123];
