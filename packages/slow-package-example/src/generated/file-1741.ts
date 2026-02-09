export type Thing1741<T> = T extends infer U ? U[] : never;

export const value1741: Thing1741<number> = [1741];
