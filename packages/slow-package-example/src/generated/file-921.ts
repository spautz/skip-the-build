export type Thing921<T> = T extends infer U ? U[] : never;

export const value921: Thing921<number> = [921];
