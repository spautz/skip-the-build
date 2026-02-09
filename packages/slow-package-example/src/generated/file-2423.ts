export type Thing2423<T> = T extends infer U ? U[] : never;

export const value2423: Thing2423<number> = [2423];
