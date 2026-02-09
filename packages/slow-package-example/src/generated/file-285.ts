export type Thing285<T> = T extends infer U ? U[] : never;

export const value285: Thing285<number> = [285];
