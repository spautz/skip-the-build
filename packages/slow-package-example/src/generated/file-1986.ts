export type Thing1986<T> = T extends infer U ? U[] : never;

export const value1986: Thing1986<number> = [1986];
