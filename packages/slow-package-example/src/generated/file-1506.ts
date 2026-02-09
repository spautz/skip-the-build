export type Thing1506<T> = T extends infer U ? U[] : never;

export const value1506: Thing1506<number> = [1506];
