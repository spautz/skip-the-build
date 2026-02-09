export type Thing2001<T> = T extends infer U ? U[] : never;

export const value2001: Thing2001<number> = [2001];
