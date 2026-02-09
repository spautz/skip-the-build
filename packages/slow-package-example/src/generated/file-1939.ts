export type Thing1939<T> = T extends infer U ? U[] : never;

export const value1939: Thing1939<number> = [1939];
