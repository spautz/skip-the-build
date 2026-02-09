export type Thing1827<T> = T extends infer U ? U[] : never;

export const value1827: Thing1827<number> = [1827];
