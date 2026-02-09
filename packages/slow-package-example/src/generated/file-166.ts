export type Thing166<T> = T extends infer U ? U[] : never;

export const value166: Thing166<number> = [166];
