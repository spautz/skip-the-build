export type Thing1320<T> = T extends infer U ? U[] : never;

export const value1320: Thing1320<number> = [1320];
