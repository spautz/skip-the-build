export type Thing600<T> = T extends infer U ? U[] : never;

export const value600: Thing600<number> = [600];
