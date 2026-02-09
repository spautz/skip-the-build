export type Thing1217<T> = T extends infer U ? U[] : never;

export const value1217: Thing1217<number> = [1217];
