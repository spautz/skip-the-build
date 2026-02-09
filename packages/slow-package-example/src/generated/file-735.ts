export type Thing735<T> = T extends infer U ? U[] : never;

export const value735: Thing735<number> = [735];
