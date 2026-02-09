export type Thing4<T> = T extends infer U ? U[] : never;

export const value4: Thing4<number> = [4];
