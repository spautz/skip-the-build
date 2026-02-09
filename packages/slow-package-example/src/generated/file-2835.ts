export type Thing2835<T> = T extends infer U ? U[] : never;

export const value2835: Thing2835<number> = [2835];
