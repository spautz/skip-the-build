export type Thing1652<T> = T extends infer U ? U[] : never;

export const value1652: Thing1652<number> = [1652];
