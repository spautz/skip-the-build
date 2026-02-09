export type Thing1796<T> = T extends infer U ? U[] : never;

export const value1796: Thing1796<number> = [1796];
