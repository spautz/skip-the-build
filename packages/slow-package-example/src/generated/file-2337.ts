export type Thing2337<T> = T extends infer U ? U[] : never;

export const value2337: Thing2337<number> = [2337];
