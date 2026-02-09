export type Thing1739<T> = T extends infer U ? U[] : never;

export const value1739: Thing1739<number> = [1739];
