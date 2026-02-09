export type Thing326<T> = T extends infer U ? U[] : never;

export const value326: Thing326<number> = [326];
