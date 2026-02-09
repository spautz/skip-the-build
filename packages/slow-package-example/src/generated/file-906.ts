export type Thing906<T> = T extends infer U ? U[] : never;

export const value906: Thing906<number> = [906];
