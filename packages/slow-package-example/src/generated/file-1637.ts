export type Thing1637<T> = T extends infer U ? U[] : never;

export const value1637: Thing1637<number> = [1637];
