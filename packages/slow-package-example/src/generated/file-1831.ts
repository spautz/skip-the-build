export type Thing1831<T> = T extends infer U ? U[] : never;

export const value1831: Thing1831<number> = [1831];
