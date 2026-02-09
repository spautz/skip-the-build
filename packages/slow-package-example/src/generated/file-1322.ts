export type Thing1322<T> = T extends infer U ? U[] : never;

export const value1322: Thing1322<number> = [1322];
