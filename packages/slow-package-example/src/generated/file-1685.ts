export type Thing1685<T> = T extends infer U ? U[] : never;

export const value1685: Thing1685<number> = [1685];
