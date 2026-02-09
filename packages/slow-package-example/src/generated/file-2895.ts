export type Thing2895<T> = T extends infer U ? U[] : never;

export const value2895: Thing2895<number> = [2895];
