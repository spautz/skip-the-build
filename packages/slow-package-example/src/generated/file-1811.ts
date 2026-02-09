export type Thing1811<T> = T extends infer U ? U[] : never;

export const value1811: Thing1811<number> = [1811];
