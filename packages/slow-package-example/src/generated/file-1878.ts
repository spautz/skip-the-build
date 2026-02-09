export type Thing1878<T> = T extends infer U ? U[] : never;

export const value1878: Thing1878<number> = [1878];
