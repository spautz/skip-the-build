export type Thing1615<T> = T extends infer U ? U[] : never;

export const value1615: Thing1615<number> = [1615];
