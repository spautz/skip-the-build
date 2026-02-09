export type Thing1222<T> = T extends infer U ? U[] : never;

export const value1222: Thing1222<number> = [1222];
