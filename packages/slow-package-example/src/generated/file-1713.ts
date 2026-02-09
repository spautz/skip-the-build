export type Thing1713<T> = T extends infer U ? U[] : never;

export const value1713: Thing1713<number> = [1713];
