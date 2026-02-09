export type Thing940<T> = T extends infer U ? U[] : never;

export const value940: Thing940<number> = [940];
