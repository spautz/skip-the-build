export type Thing2430<T> = T extends infer U ? U[] : never;

export const value2430: Thing2430<number> = [2430];
