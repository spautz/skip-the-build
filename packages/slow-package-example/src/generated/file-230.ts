export type Thing230<T> = T extends infer U ? U[] : never;

export const value230: Thing230<number> = [230];
