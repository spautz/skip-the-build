export type Thing2688<T> = T extends infer U ? U[] : never;

export const value2688: Thing2688<number> = [2688];
