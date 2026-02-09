export type Thing1188<T> = T extends infer U ? U[] : never;

export const value1188: Thing1188<number> = [1188];
