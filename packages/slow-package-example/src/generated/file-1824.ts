export type Thing1824<T> = T extends infer U ? U[] : never;

export const value1824: Thing1824<number> = [1824];
