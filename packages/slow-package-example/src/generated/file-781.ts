export type Thing781<T> = T extends infer U ? U[] : never;

export const value781: Thing781<number> = [781];
