export type Thing1949<T> = T extends infer U ? U[] : never;

export const value1949: Thing1949<number> = [1949];
