export type Thing2512<T> = T extends infer U ? U[] : never;

export const value2512: Thing2512<number> = [2512];
