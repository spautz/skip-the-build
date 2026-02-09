export type Thing192<T> = T extends infer U ? U[] : never;

export const value192: Thing192<number> = [192];
