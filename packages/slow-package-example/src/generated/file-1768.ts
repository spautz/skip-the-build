export type Thing1768<T> = T extends infer U ? U[] : never;

export const value1768: Thing1768<number> = [1768];
