export type Thing83<T> = T extends infer U ? U[] : never;

export const value83: Thing83<number> = [83];
