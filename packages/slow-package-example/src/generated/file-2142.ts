export type Thing2142<T> = T extends infer U ? U[] : never;

export const value2142: Thing2142<number> = [2142];
