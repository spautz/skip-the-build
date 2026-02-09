export type Thing1602<T> = T extends infer U ? U[] : never;

export const value1602: Thing1602<number> = [1602];
