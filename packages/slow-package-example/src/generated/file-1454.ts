export type Thing1454<T> = T extends infer U ? U[] : never;

export const value1454: Thing1454<number> = [1454];
