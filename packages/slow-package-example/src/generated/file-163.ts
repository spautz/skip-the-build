export type Thing163<T> = T extends infer U ? U[] : never;

export const value163: Thing163<number> = [163];
