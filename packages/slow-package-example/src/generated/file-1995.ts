export type Thing1995<T> = T extends infer U ? U[] : never;

export const value1995: Thing1995<number> = [1995];
