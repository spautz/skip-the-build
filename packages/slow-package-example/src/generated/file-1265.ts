export type Thing1265<T> = T extends infer U ? U[] : never;

export const value1265: Thing1265<number> = [1265];
