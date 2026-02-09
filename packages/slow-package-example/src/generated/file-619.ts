export type Thing619<T> = T extends infer U ? U[] : never;

export const value619: Thing619<number> = [619];
