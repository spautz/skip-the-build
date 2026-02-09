export type Thing2242<T> = T extends infer U ? U[] : never;

export const value2242: Thing2242<number> = [2242];
