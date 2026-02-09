export type Thing1965<T> = T extends infer U ? U[] : never;

export const value1965: Thing1965<number> = [1965];
