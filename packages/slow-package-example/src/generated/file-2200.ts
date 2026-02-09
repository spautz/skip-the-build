export type Thing2200<T> = T extends infer U ? U[] : never;

export const value2200: Thing2200<number> = [2200];
