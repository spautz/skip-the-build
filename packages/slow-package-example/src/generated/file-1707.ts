export type Thing1707<T> = T extends infer U ? U[] : never;

export const value1707: Thing1707<number> = [1707];
