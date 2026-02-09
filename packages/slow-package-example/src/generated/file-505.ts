export type Thing505<T> = T extends infer U ? U[] : never;

export const value505: Thing505<number> = [505];
