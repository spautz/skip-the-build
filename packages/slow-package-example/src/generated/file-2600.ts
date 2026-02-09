export type Thing2600<T> = T extends infer U ? U[] : never;

export const value2600: Thing2600<number> = [2600];
