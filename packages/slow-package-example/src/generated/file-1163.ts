export type Thing1163<T> = T extends infer U ? U[] : never;

export const value1163: Thing1163<number> = [1163];
