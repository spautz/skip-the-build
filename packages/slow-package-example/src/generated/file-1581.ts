export type Thing1581<T> = T extends infer U ? U[] : never;

export const value1581: Thing1581<number> = [1581];
