export type Thing430<T> = T extends infer U ? U[] : never;

export const value430: Thing430<number> = [430];
