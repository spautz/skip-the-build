export type Thing2100<T> = T extends infer U ? U[] : never;

export const value2100: Thing2100<number> = [2100];
