export type Thing1905<T> = T extends infer U ? U[] : never;

export const value1905: Thing1905<number> = [1905];
