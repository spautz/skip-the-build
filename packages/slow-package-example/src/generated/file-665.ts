export type Thing665<T> = T extends infer U ? U[] : never;

export const value665: Thing665<number> = [665];
