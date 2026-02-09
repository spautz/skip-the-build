export type Thing1752<T> = T extends infer U ? U[] : never;

export const value1752: Thing1752<number> = [1752];
