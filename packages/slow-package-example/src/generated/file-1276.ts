export type Thing1276<T> = T extends infer U ? U[] : never;

export const value1276: Thing1276<number> = [1276];
