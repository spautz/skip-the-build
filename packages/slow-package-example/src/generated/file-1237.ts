export type Thing1237<T> = T extends infer U ? U[] : never;

export const value1237: Thing1237<number> = [1237];
