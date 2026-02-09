export type Thing1539<T> = T extends infer U ? U[] : never;

export const value1539: Thing1539<number> = [1539];
