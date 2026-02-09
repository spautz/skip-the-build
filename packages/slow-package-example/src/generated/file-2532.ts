export type Thing2532<T> = T extends infer U ? U[] : never;

export const value2532: Thing2532<number> = [2532];
