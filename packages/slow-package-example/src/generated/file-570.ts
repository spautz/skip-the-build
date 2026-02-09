export type Thing570<T> = T extends infer U ? U[] : never;

export const value570: Thing570<number> = [570];
