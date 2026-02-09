export type Thing1285<T> = T extends infer U ? U[] : never;

export const value1285: Thing1285<number> = [1285];
