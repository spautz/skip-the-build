export type Thing202<T> = T extends infer U ? U[] : never;

export const value202: Thing202<number> = [202];
