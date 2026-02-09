export type Thing2230<T> = T extends infer U ? U[] : never;

export const value2230: Thing2230<number> = [2230];
