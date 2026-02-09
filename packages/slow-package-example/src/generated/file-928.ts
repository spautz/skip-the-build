export type Thing928<T> = T extends infer U ? U[] : never;

export const value928: Thing928<number> = [928];
