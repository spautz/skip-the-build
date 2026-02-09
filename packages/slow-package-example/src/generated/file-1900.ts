export type Thing1900<T> = T extends infer U ? U[] : never;

export const value1900: Thing1900<number> = [1900];
