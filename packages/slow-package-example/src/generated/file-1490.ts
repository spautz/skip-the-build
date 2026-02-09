export type Thing1490<T> = T extends infer U ? U[] : never;

export const value1490: Thing1490<number> = [1490];
