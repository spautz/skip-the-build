export type Thing590<T> = T extends infer U ? U[] : never;

export const value590: Thing590<number> = [590];
