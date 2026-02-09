export type Thing2705<T> = T extends infer U ? U[] : never;

export const value2705: Thing2705<number> = [2705];
