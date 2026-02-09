export type Thing2031<T> = T extends infer U ? U[] : never;

export const value2031: Thing2031<number> = [2031];
