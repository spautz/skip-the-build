export type Thing1880<T> = T extends infer U ? U[] : never;

export const value1880: Thing1880<number> = [1880];
