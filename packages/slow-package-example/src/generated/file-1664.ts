export type Thing1664<T> = T extends infer U ? U[] : never;

export const value1664: Thing1664<number> = [1664];
