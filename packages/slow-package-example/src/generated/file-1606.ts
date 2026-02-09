export type Thing1606<T> = T extends infer U ? U[] : never;

export const value1606: Thing1606<number> = [1606];
