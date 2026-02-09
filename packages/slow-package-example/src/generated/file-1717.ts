export type Thing1717<T> = T extends infer U ? U[] : never;

export const value1717: Thing1717<number> = [1717];
