export type Thing2103<T> = T extends infer U ? U[] : never;

export const value2103: Thing2103<number> = [2103];
