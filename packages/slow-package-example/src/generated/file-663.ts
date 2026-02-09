export type Thing663<T> = T extends infer U ? U[] : never;

export const value663: Thing663<number> = [663];
