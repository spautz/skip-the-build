export type Thing1243<T> = T extends infer U ? U[] : never;

export const value1243: Thing1243<number> = [1243];
