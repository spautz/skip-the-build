export type Thing1754<T> = T extends infer U ? U[] : never;

export const value1754: Thing1754<number> = [1754];
