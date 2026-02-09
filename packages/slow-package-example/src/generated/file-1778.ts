export type Thing1778<T> = T extends infer U ? U[] : never;

export const value1778: Thing1778<number> = [1778];
