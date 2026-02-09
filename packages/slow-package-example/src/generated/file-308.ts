export type Thing308<T> = T extends infer U ? U[] : never;

export const value308: Thing308<number> = [308];
