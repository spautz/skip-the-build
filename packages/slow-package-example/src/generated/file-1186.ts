export type Thing1186<T> = T extends infer U ? U[] : never;

export const value1186: Thing1186<number> = [1186];
