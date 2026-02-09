export type Thing775<T> = T extends infer U ? U[] : never;

export const value775: Thing775<number> = [775];
