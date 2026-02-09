export type Thing1902<T> = T extends infer U ? U[] : never;

export const value1902: Thing1902<number> = [1902];
