export type Thing224<T> = T extends infer U ? U[] : never;

export const value224: Thing224<number> = [224];
