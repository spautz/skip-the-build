export type Thing314<T> = T extends infer U ? U[] : never;

export const value314: Thing314<number> = [314];
