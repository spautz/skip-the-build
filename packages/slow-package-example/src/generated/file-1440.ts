export type Thing1440<T> = T extends infer U ? U[] : never;

export const value1440: Thing1440<number> = [1440];
