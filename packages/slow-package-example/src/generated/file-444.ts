export type Thing444<T> = T extends infer U ? U[] : never;

export const value444: Thing444<number> = [444];
