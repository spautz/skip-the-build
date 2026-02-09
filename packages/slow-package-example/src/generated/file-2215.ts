export type Thing2215<T> = T extends infer U ? U[] : never;

export const value2215: Thing2215<number> = [2215];
