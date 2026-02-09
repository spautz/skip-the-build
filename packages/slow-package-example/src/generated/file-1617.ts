export type Thing1617<T> = T extends infer U ? U[] : never;

export const value1617: Thing1617<number> = [1617];
