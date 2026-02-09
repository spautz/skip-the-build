export type Thing1410<T> = T extends infer U ? U[] : never;

export const value1410: Thing1410<number> = [1410];
