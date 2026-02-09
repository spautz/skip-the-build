export type Thing1213<T> = T extends infer U ? U[] : never;

export const value1213: Thing1213<number> = [1213];
