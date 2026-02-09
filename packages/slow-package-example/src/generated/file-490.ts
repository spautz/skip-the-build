export type Thing490<T> = T extends infer U ? U[] : never;

export const value490: Thing490<number> = [490];
