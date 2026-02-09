export type Thing1843<T> = T extends infer U ? U[] : never;

export const value1843: Thing1843<number> = [1843];
