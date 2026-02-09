export type Thing2700<T> = T extends infer U ? U[] : never;

export const value2700: Thing2700<number> = [2700];
