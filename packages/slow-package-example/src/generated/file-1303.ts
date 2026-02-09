export type Thing1303<T> = T extends infer U ? U[] : never;

export const value1303: Thing1303<number> = [1303];
