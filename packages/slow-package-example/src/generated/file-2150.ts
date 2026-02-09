export type Thing2150<T> = T extends infer U ? U[] : never;

export const value2150: Thing2150<number> = [2150];
