export type Thing2090<T> = T extends infer U ? U[] : never;

export const value2090: Thing2090<number> = [2090];
