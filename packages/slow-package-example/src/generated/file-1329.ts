export type Thing1329<T> = T extends infer U ? U[] : never;

export const value1329: Thing1329<number> = [1329];
