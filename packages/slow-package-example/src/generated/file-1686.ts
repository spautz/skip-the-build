export type Thing1686<T> = T extends infer U ? U[] : never;

export const value1686: Thing1686<number> = [1686];
