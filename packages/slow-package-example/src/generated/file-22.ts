export type Thing22<T> = T extends infer U ? U[] : never;

export const value22: Thing22<number> = [22];
