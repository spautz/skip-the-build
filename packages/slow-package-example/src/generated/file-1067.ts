export type Thing1067<T> = T extends infer U ? U[] : never;

export const value1067: Thing1067<number> = [1067];
