export type Thing1541<T> = T extends infer U ? U[] : never;

export const value1541: Thing1541<number> = [1541];
