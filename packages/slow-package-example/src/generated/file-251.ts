export type Thing251<T> = T extends infer U ? U[] : never;

export const value251: Thing251<number> = [251];
