export type Thing2312<T> = T extends infer U ? U[] : never;

export const value2312: Thing2312<number> = [2312];
