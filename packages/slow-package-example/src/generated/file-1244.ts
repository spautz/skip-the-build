export type Thing1244<T> = T extends infer U ? U[] : never;

export const value1244: Thing1244<number> = [1244];
