export type Thing866<T> = T extends infer U ? U[] : never;

export const value866: Thing866<number> = [866];
