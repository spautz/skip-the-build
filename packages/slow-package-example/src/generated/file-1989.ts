export type Thing1989<T> = T extends infer U ? U[] : never;

export const value1989: Thing1989<number> = [1989];
