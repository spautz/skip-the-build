export type Thing1809<T> = T extends infer U ? U[] : never;

export const value1809: Thing1809<number> = [1809];
