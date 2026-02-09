export type Thing2822<T> = T extends infer U ? U[] : never;

export const value2822: Thing2822<number> = [2822];
