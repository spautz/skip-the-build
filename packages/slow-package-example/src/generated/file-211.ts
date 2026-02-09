export type Thing211<T> = T extends infer U ? U[] : never;

export const value211: Thing211<number> = [211];
