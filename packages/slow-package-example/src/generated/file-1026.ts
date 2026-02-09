export type Thing1026<T> = T extends infer U ? U[] : never;

export const value1026: Thing1026<number> = [1026];
