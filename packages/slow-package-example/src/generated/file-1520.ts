export type Thing1520<T> = T extends infer U ? U[] : never;

export const value1520: Thing1520<number> = [1520];
