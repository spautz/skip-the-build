export type Thing1043<T> = T extends infer U ? U[] : never;

export const value1043: Thing1043<number> = [1043];
