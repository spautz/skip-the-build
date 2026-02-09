export type Thing1590<T> = T extends infer U ? U[] : never;

export const value1590: Thing1590<number> = [1590];
