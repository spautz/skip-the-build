export type Thing1145<T> = T extends infer U ? U[] : never;

export const value1145: Thing1145<number> = [1145];
