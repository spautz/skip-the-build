export type Thing35<T> = T extends infer U ? U[] : never;

export const value35: Thing35<number> = [35];
