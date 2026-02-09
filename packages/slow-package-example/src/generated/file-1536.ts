export type Thing1536<T> = T extends infer U ? U[] : never;

export const value1536: Thing1536<number> = [1536];
