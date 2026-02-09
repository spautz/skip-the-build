export type Thing1706<T> = T extends infer U ? U[] : never;

export const value1706: Thing1706<number> = [1706];
