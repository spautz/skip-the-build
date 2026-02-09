export type Thing2989<T> = T extends infer U ? U[] : never;

export const value2989: Thing2989<number> = [2989];
