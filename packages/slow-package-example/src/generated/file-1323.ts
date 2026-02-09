export type Thing1323<T> = T extends infer U ? U[] : never;

export const value1323: Thing1323<number> = [1323];
