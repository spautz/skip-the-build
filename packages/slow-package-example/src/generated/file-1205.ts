export type Thing1205<T> = T extends infer U ? U[] : never;

export const value1205: Thing1205<number> = [1205];
