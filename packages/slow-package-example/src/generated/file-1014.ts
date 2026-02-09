export type Thing1014<T> = T extends infer U ? U[] : never;

export const value1014: Thing1014<number> = [1014];
