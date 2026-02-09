export type Thing744<T> = T extends infer U ? U[] : never;

export const value744: Thing744<number> = [744];
