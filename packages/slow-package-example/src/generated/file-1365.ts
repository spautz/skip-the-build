export type Thing1365<T> = T extends infer U ? U[] : never;

export const value1365: Thing1365<number> = [1365];
