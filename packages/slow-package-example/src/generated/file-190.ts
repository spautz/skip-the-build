export type Thing190<T> = T extends infer U ? U[] : never;

export const value190: Thing190<number> = [190];
