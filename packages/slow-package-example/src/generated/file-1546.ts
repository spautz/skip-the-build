export type Thing1546<T> = T extends infer U ? U[] : never;

export const value1546: Thing1546<number> = [1546];
