export type Thing399<T> = T extends infer U ? U[] : never;

export const value399: Thing399<number> = [399];
