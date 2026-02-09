export type Thing802<T> = T extends infer U ? U[] : never;

export const value802: Thing802<number> = [802];
