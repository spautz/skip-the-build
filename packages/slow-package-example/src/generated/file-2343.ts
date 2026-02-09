export type Thing2343<T> = T extends infer U ? U[] : never;

export const value2343: Thing2343<number> = [2343];
