export type Thing2083<T> = T extends infer U ? U[] : never;

export const value2083: Thing2083<number> = [2083];
