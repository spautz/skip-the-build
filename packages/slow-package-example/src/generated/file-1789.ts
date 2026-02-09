export type Thing1789<T> = T extends infer U ? U[] : never;

export const value1789: Thing1789<number> = [1789];
