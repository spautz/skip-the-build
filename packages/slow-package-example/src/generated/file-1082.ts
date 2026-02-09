export type Thing1082<T> = T extends infer U ? U[] : never;

export const value1082: Thing1082<number> = [1082];
