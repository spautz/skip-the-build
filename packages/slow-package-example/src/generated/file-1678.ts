export type Thing1678<T> = T extends infer U ? U[] : never;

export const value1678: Thing1678<number> = [1678];
