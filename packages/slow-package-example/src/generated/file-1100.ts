export type Thing1100<T> = T extends infer U ? U[] : never;

export const value1100: Thing1100<number> = [1100];
