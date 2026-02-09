export type Thing1543<T> = T extends infer U ? U[] : never;

export const value1543: Thing1543<number> = [1543];
