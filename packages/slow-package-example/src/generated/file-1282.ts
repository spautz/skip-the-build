export type Thing1282<T> = T extends infer U ? U[] : never;

export const value1282: Thing1282<number> = [1282];
