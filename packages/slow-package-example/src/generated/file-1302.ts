export type Thing1302<T> = T extends infer U ? U[] : never;

export const value1302: Thing1302<number> = [1302];
