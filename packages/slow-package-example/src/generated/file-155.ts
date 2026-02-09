export type Thing155<T> = T extends infer U ? U[] : never;

export const value155: Thing155<number> = [155];
