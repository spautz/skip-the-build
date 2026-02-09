export type Thing1308<T> = T extends infer U ? U[] : never;

export const value1308: Thing1308<number> = [1308];
