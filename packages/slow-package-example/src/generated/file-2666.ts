export type Thing2666<T> = T extends infer U ? U[] : never;

export const value2666: Thing2666<number> = [2666];
