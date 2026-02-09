export type Thing742<T> = T extends infer U ? U[] : never;

export const value742: Thing742<number> = [742];
