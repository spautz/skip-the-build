export type Thing2123<T> = T extends infer U ? U[] : never;

export const value2123: Thing2123<number> = [2123];
