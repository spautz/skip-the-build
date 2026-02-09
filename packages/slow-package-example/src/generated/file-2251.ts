export type Thing2251<T> = T extends infer U ? U[] : never;

export const value2251: Thing2251<number> = [2251];
