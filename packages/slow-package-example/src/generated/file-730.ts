export type Thing730<T> = T extends infer U ? U[] : never;

export const value730: Thing730<number> = [730];
