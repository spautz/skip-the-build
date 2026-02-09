export type Thing16<T> = T extends infer U ? U[] : never;

export const value16: Thing16<number> = [16];
