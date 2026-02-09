export type Thing831<T> = T extends infer U ? U[] : never;

export const value831: Thing831<number> = [831];
