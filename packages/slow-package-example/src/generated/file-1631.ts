export type Thing1631<T> = T extends infer U ? U[] : never;

export const value1631: Thing1631<number> = [1631];
