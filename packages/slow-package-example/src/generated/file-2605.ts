export type Thing2605<T> = T extends infer U ? U[] : never;

export const value2605: Thing2605<number> = [2605];
