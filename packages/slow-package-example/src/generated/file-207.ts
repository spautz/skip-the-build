export type Thing207<T> = T extends infer U ? U[] : never;

export const value207: Thing207<number> = [207];
