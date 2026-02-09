export type Thing661<T> = T extends infer U ? U[] : never;

export const value661: Thing661<number> = [661];
