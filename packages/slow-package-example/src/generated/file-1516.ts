export type Thing1516<T> = T extends infer U ? U[] : never;

export const value1516: Thing1516<number> = [1516];
