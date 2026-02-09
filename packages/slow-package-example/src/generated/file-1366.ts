export type Thing1366<T> = T extends infer U ? U[] : never;

export const value1366: Thing1366<number> = [1366];
