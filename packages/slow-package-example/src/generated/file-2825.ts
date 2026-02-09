export type Thing2825<T> = T extends infer U ? U[] : never;

export const value2825: Thing2825<number> = [2825];
