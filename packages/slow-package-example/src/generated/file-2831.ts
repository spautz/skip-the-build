export type Thing2831<T> = T extends infer U ? U[] : never;

export const value2831: Thing2831<number> = [2831];
