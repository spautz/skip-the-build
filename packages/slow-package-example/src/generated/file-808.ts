export type Thing808<T> = T extends infer U ? U[] : never;

export const value808: Thing808<number> = [808];
