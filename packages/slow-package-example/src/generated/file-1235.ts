export type Thing1235<T> = T extends infer U ? U[] : never;

export const value1235: Thing1235<number> = [1235];
