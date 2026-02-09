export type Thing1978<T> = T extends infer U ? U[] : never;

export const value1978: Thing1978<number> = [1978];
