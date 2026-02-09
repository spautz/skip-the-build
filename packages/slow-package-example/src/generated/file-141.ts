export type Thing141<T> = T extends infer U ? U[] : never;

export const value141: Thing141<number> = [141];
