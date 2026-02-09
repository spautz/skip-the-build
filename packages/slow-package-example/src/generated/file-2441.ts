export type Thing2441<T> = T extends infer U ? U[] : never;

export const value2441: Thing2441<number> = [2441];
