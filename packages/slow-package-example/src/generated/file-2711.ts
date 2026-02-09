export type Thing2711<T> = T extends infer U ? U[] : never;

export const value2711: Thing2711<number> = [2711];
