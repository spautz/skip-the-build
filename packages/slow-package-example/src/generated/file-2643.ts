export type Thing2643<T> = T extends infer U ? U[] : never;

export const value2643: Thing2643<number> = [2643];
