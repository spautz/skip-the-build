export type Thing1478<T> = T extends infer U ? U[] : never;

export const value1478: Thing1478<number> = [1478];
