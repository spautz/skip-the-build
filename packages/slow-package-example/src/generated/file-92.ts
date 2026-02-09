export type Thing92<T> = T extends infer U ? U[] : never;

export const value92: Thing92<number> = [92];
