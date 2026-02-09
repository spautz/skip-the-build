export type Thing1078<T> = T extends infer U ? U[] : never;

export const value1078: Thing1078<number> = [1078];
