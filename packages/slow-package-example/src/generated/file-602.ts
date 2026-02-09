export type Thing602<T> = T extends infer U ? U[] : never;

export const value602: Thing602<number> = [602];
