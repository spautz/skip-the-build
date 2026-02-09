export type Thing1081<T> = T extends infer U ? U[] : never;

export const value1081: Thing1081<number> = [1081];
