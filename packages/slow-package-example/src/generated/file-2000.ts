export type Thing2000<T> = T extends infer U ? U[] : never;

export const value2000: Thing2000<number> = [2000];
