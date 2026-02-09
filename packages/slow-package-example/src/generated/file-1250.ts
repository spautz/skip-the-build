export type Thing1250<T> = T extends infer U ? U[] : never;

export const value1250: Thing1250<number> = [1250];
