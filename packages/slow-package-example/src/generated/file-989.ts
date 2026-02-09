export type Thing989<T> = T extends infer U ? U[] : never;

export const value989: Thing989<number> = [989];
