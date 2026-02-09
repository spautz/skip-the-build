export type Thing2801<T> = T extends infer U ? U[] : never;

export const value2801: Thing2801<number> = [2801];
