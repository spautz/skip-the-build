export type Thing152<T> = T extends infer U ? U[] : never;

export const value152: Thing152<number> = [152];
