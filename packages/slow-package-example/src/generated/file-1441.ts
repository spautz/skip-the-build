export type Thing1441<T> = T extends infer U ? U[] : never;

export const value1441: Thing1441<number> = [1441];
