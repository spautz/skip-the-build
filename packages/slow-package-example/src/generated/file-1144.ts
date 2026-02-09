export type Thing1144<T> = T extends infer U ? U[] : never;

export const value1144: Thing1144<number> = [1144];
