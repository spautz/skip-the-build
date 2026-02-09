export type Thing310<T> = T extends infer U ? U[] : never;

export const value310: Thing310<number> = [310];
