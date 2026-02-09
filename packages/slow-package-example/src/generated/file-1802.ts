export type Thing1802<T> = T extends infer U ? U[] : never;

export const value1802: Thing1802<number> = [1802];
