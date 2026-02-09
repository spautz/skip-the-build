export type Thing322<T> = T extends infer U ? U[] : never;

export const value322: Thing322<number> = [322];
