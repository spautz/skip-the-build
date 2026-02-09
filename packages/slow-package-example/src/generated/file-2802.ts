export type Thing2802<T> = T extends infer U ? U[] : never;

export const value2802: Thing2802<number> = [2802];
