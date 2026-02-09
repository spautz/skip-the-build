export type Thing337<T> = T extends infer U ? U[] : never;

export const value337: Thing337<number> = [337];
