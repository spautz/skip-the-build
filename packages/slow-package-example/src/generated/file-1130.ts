export type Thing1130<T> = T extends infer U ? U[] : never;

export const value1130: Thing1130<number> = [1130];
