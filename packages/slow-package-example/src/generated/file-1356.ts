export type Thing1356<T> = T extends infer U ? U[] : never;

export const value1356: Thing1356<number> = [1356];
