export type Thing1062<T> = T extends infer U ? U[] : never;

export const value1062: Thing1062<number> = [1062];
