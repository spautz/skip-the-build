export type Thing2550<T> = T extends infer U ? U[] : never;

export const value2550: Thing2550<number> = [2550];
