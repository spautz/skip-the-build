export type Thing1220<T> = T extends infer U ? U[] : never;

export const value1220: Thing1220<number> = [1220];
