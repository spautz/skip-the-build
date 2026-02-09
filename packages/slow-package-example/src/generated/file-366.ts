export type Thing366<T> = T extends infer U ? U[] : never;

export const value366: Thing366<number> = [366];
