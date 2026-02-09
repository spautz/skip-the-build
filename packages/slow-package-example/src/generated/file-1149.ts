export type Thing1149<T> = T extends infer U ? U[] : never;

export const value1149: Thing1149<number> = [1149];
