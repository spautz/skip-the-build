export type Thing718<T> = T extends infer U ? U[] : never;

export const value718: Thing718<number> = [718];
