export type Thing1191<T> = T extends infer U ? U[] : never;

export const value1191: Thing1191<number> = [1191];
