export type Thing1048<T> = T extends infer U ? U[] : never;

export const value1048: Thing1048<number> = [1048];
