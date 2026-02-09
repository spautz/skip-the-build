export type Thing2212<T> = T extends infer U ? U[] : never;

export const value2212: Thing2212<number> = [2212];
