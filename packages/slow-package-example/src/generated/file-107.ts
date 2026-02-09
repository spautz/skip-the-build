export type Thing107<T> = T extends infer U ? U[] : never;

export const value107: Thing107<number> = [107];
