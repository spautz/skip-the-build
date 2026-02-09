export type Thing98<T> = T extends infer U ? U[] : never;

export const value98: Thing98<number> = [98];
