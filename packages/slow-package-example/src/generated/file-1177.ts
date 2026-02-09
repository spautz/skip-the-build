export type Thing1177<T> = T extends infer U ? U[] : never;

export const value1177: Thing1177<number> = [1177];
