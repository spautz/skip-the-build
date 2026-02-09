export type Thing799<T> = T extends infer U ? U[] : never;

export const value799: Thing799<number> = [799];
