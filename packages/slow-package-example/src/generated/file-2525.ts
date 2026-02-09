export type Thing2525<T> = T extends infer U ? U[] : never;

export const value2525: Thing2525<number> = [2525];
