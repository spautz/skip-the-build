export type Thing1138<T> = T extends infer U ? U[] : never;

export const value1138: Thing1138<number> = [1138];
