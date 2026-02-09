export type Thing1808<T> = T extends infer U ? U[] : never;

export const value1808: Thing1808<number> = [1808];
