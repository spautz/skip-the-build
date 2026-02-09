export type Thing1779<T> = T extends infer U ? U[] : never;

export const value1779: Thing1779<number> = [1779];
