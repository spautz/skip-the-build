export type Thing1074<T> = T extends infer U ? U[] : never;

export const value1074: Thing1074<number> = [1074];
