export type Thing1089<T> = T extends infer U ? U[] : never;

export const value1089: Thing1089<number> = [1089];
