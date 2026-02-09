export type Thing2492<T> = T extends infer U ? U[] : never;

export const value2492: Thing2492<number> = [2492];
