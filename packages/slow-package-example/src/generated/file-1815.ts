export type Thing1815<T> = T extends infer U ? U[] : never;

export const value1815: Thing1815<number> = [1815];
