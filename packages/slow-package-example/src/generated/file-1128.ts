export type Thing1128<T> = T extends infer U ? U[] : never;

export const value1128: Thing1128<number> = [1128];
