export type Thing1641<T> = T extends infer U ? U[] : never;

export const value1641: Thing1641<number> = [1641];
