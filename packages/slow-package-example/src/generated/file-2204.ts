export type Thing2204<T> = T extends infer U ? U[] : never;

export const value2204: Thing2204<number> = [2204];
