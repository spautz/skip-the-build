export type Thing609<T> = T extends infer U ? U[] : never;

export const value609: Thing609<number> = [609];
