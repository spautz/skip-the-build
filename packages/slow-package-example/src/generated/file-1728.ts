export type Thing1728<T> = T extends infer U ? U[] : never;

export const value1728: Thing1728<number> = [1728];
