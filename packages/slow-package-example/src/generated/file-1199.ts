export type Thing1199<T> = T extends infer U ? U[] : never;

export const value1199: Thing1199<number> = [1199];
