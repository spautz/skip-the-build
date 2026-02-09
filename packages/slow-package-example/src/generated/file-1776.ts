export type Thing1776<T> = T extends infer U ? U[] : never;

export const value1776: Thing1776<number> = [1776];
