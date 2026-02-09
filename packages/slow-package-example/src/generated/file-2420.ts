export type Thing2420<T> = T extends infer U ? U[] : never;

export const value2420: Thing2420<number> = [2420];
