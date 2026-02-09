export type Thing1966<T> = T extends infer U ? U[] : never;

export const value1966: Thing1966<number> = [1966];
