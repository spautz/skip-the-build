export type Thing1339<T> = T extends infer U ? U[] : never;

export const value1339: Thing1339<number> = [1339];
