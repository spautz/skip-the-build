export type Thing1656<T> = T extends infer U ? U[] : never;

export const value1656: Thing1656<number> = [1656];
