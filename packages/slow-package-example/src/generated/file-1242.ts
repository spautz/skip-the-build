export type Thing1242<T> = T extends infer U ? U[] : never;

export const value1242: Thing1242<number> = [1242];
