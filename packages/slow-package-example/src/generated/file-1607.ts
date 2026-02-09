export type Thing1607<T> = T extends infer U ? U[] : never;

export const value1607: Thing1607<number> = [1607];
