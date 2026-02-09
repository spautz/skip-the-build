export type Thing1721<T> = T extends infer U ? U[] : never;

export const value1721: Thing1721<number> = [1721];
