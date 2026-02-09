export type Thing2112<T> = T extends infer U ? U[] : never;

export const value2112: Thing2112<number> = [2112];
