export type Thing1673<T> = T extends infer U ? U[] : never;

export const value1673: Thing1673<number> = [1673];
