export type Thing1993<T> = T extends infer U ? U[] : never;

export const value1993: Thing1993<number> = [1993];
