export type Thing1624<T> = T extends infer U ? U[] : never;

export const value1624: Thing1624<number> = [1624];
