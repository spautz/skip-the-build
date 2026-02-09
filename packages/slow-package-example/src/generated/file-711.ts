export type Thing711<T> = T extends infer U ? U[] : never;

export const value711: Thing711<number> = [711];
