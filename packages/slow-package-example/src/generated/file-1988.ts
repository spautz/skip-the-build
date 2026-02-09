export type Thing1988<T> = T extends infer U ? U[] : never;

export const value1988: Thing1988<number> = [1988];
