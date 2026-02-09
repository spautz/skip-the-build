export type Thing1083<T> = T extends infer U ? U[] : never;

export const value1083: Thing1083<number> = [1083];
