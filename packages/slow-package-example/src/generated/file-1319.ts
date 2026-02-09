export type Thing1319<T> = T extends infer U ? U[] : never;

export const value1319: Thing1319<number> = [1319];
