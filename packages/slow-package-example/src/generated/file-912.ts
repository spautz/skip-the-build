export type Thing912<T> = T extends infer U ? U[] : never;

export const value912: Thing912<number> = [912];
