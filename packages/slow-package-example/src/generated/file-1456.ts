export type Thing1456<T> = T extends infer U ? U[] : never;

export const value1456: Thing1456<number> = [1456];
