export type Thing1444<T> = T extends infer U ? U[] : never;

export const value1444: Thing1444<number> = [1444];
