export type Thing1076<T> = T extends infer U ? U[] : never;

export const value1076: Thing1076<number> = [1076];
