export type Thing2182<T> = T extends infer U ? U[] : never;

export const value2182: Thing2182<number> = [2182];
