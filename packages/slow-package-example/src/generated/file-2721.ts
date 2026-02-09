export type Thing2721<T> = T extends infer U ? U[] : never;

export const value2721: Thing2721<number> = [2721];
