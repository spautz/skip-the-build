export type Thing56<T> = T extends infer U ? U[] : never;

export const value56: Thing56<number> = [56];
