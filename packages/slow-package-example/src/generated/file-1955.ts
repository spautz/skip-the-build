export type Thing1955<T> = T extends infer U ? U[] : never;

export const value1955: Thing1955<number> = [1955];
