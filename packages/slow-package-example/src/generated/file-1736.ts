export type Thing1736<T> = T extends infer U ? U[] : never;

export const value1736: Thing1736<number> = [1736];
