export type Thing2511<T> = T extends infer U ? U[] : never;

export const value2511: Thing2511<number> = [2511];
