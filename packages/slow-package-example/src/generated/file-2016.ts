export type Thing2016<T> = T extends infer U ? U[] : never;

export const value2016: Thing2016<number> = [2016];
