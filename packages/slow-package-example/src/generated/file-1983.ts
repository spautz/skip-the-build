export type Thing1983<T> = T extends infer U ? U[] : never;

export const value1983: Thing1983<number> = [1983];
