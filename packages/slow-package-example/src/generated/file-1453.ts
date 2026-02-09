export type Thing1453<T> = T extends infer U ? U[] : never;

export const value1453: Thing1453<number> = [1453];
