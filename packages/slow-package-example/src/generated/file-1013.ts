export type Thing1013<T> = T extends infer U ? U[] : never;

export const value1013: Thing1013<number> = [1013];
