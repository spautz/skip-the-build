export type Thing342<T> = T extends infer U ? U[] : never;

export const value342: Thing342<number> = [342];
