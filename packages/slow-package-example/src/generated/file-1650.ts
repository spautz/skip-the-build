export type Thing1650<T> = T extends infer U ? U[] : never;

export const value1650: Thing1650<number> = [1650];
