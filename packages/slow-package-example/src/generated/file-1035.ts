export type Thing1035<T> = T extends infer U ? U[] : never;

export const value1035: Thing1035<number> = [1035];
