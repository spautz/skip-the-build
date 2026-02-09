export type Thing555<T> = T extends infer U ? U[] : never;

export const value555: Thing555<number> = [555];
