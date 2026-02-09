export type Thing1126<T> = T extends infer U ? U[] : never;

export const value1126: Thing1126<number> = [1126];
