export type Thing2899<T> = T extends infer U ? U[] : never;

export const value2899: Thing2899<number> = [2899];
