export type Thing1165<T> = T extends infer U ? U[] : never;

export const value1165: Thing1165<number> = [1165];
