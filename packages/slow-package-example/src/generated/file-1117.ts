export type Thing1117<T> = T extends infer U ? U[] : never;

export const value1117: Thing1117<number> = [1117];
