export type Thing1284<T> = T extends infer U ? U[] : never;

export const value1284: Thing1284<number> = [1284];
