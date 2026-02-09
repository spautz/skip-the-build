export type Thing1619<T> = T extends infer U ? U[] : never;

export const value1619: Thing1619<number> = [1619];
