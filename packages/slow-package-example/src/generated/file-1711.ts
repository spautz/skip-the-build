export type Thing1711<T> = T extends infer U ? U[] : never;

export const value1711: Thing1711<number> = [1711];
