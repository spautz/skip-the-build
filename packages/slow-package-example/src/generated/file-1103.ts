export type Thing1103<T> = T extends infer U ? U[] : never;

export const value1103: Thing1103<number> = [1103];
