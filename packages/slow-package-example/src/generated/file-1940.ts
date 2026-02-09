export type Thing1940<T> = T extends infer U ? U[] : never;

export const value1940: Thing1940<number> = [1940];
