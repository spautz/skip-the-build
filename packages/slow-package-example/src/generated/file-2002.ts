export type Thing2002<T> = T extends infer U ? U[] : never;

export const value2002: Thing2002<number> = [2002];
