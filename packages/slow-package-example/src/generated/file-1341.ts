export type Thing1341<T> = T extends infer U ? U[] : never;

export const value1341: Thing1341<number> = [1341];
