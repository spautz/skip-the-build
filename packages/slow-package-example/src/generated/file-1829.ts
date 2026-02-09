export type Thing1829<T> = T extends infer U ? U[] : never;

export const value1829: Thing1829<number> = [1829];
