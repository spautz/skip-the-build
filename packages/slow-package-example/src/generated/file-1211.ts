export type Thing1211<T> = T extends infer U ? U[] : never;

export const value1211: Thing1211<number> = [1211];
