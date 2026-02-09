export type Thing1620<T> = T extends infer U ? U[] : never;

export const value1620: Thing1620<number> = [1620];
