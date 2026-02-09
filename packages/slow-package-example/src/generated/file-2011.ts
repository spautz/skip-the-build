export type Thing2011<T> = T extends infer U ? U[] : never;

export const value2011: Thing2011<number> = [2011];
