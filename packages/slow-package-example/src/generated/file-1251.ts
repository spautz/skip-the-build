export type Thing1251<T> = T extends infer U ? U[] : never;

export const value1251: Thing1251<number> = [1251];
