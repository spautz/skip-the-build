export type Thing205<T> = T extends infer U ? U[] : never;

export const value205: Thing205<number> = [205];
