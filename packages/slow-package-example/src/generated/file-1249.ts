export type Thing1249<T> = T extends infer U ? U[] : never;

export const value1249: Thing1249<number> = [1249];
