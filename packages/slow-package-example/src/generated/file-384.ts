export type Thing384<T> = T extends infer U ? U[] : never;

export const value384: Thing384<number> = [384];
