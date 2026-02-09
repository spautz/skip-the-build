export type Thing1623<T> = T extends infer U ? U[] : never;

export const value1623: Thing1623<number> = [1623];
