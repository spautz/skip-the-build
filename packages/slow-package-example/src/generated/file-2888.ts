export type Thing2888<T> = T extends infer U ? U[] : never;

export const value2888: Thing2888<number> = [2888];
