export type Thing1412<T> = T extends infer U ? U[] : never;

export const value1412: Thing1412<number> = [1412];
