export type Thing1484<T> = T extends infer U ? U[] : never;

export const value1484: Thing1484<number> = [1484];
