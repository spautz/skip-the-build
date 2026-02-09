export type Thing1700<T> = T extends infer U ? U[] : never;

export const value1700: Thing1700<number> = [1700];
