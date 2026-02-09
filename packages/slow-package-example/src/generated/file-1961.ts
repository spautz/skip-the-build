export type Thing1961<T> = T extends infer U ? U[] : never;

export const value1961: Thing1961<number> = [1961];
