export type Thing841<T> = T extends infer U ? U[] : never;

export const value841: Thing841<number> = [841];
