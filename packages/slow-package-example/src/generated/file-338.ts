export type Thing338<T> = T extends infer U ? U[] : never;

export const value338: Thing338<number> = [338];
