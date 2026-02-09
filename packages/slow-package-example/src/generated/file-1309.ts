export type Thing1309<T> = T extends infer U ? U[] : never;

export const value1309: Thing1309<number> = [1309];
