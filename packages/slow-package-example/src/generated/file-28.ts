export type Thing28<T> = T extends infer U ? U[] : never;

export const value28: Thing28<number> = [28];
