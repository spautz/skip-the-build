export type Thing1540<T> = T extends infer U ? U[] : never;

export const value1540: Thing1540<number> = [1540];
