export type Thing1342<T> = T extends infer U ? U[] : never;

export const value1342: Thing1342<number> = [1342];
