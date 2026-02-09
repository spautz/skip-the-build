export type Thing626<T> = T extends infer U ? U[] : never;

export const value626: Thing626<number> = [626];
