export type Thing1819<T> = T extends infer U ? U[] : never;

export const value1819: Thing1819<number> = [1819];
