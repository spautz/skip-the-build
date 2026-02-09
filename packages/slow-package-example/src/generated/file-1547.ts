export type Thing1547<T> = T extends infer U ? U[] : never;

export const value1547: Thing1547<number> = [1547];
