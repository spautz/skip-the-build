export type Thing1845<T> = T extends infer U ? U[] : never;

export const value1845: Thing1845<number> = [1845];
