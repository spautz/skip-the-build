export type Thing1598<T> = T extends infer U ? U[] : never;

export const value1598: Thing1598<number> = [1598];
