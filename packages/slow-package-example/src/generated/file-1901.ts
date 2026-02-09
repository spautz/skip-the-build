export type Thing1901<T> = T extends infer U ? U[] : never;

export const value1901: Thing1901<number> = [1901];
