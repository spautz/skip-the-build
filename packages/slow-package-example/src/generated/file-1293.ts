export type Thing1293<T> = T extends infer U ? U[] : never;

export const value1293: Thing1293<number> = [1293];
