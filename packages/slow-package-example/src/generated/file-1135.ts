export type Thing1135<T> = T extends infer U ? U[] : never;

export const value1135: Thing1135<number> = [1135];
