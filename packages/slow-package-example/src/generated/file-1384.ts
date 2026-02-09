export type Thing1384<T> = T extends infer U ? U[] : never;

export const value1384: Thing1384<number> = [1384];
