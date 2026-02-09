export type Thing2678<T> = T extends infer U ? U[] : never;

export const value2678: Thing2678<number> = [2678];
