export type Thing1350<T> = T extends infer U ? U[] : never;

export const value1350: Thing1350<number> = [1350];
