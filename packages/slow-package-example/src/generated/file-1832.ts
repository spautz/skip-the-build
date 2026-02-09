export type Thing1832<T> = T extends infer U ? U[] : never;

export const value1832: Thing1832<number> = [1832];
