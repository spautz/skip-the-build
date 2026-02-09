export type Thing1600<T> = T extends infer U ? U[] : never;

export const value1600: Thing1600<number> = [1600];
