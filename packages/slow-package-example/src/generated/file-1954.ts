export type Thing1954<T> = T extends infer U ? U[] : never;

export const value1954: Thing1954<number> = [1954];
