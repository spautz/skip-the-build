export type Thing290<T> = T extends infer U ? U[] : never;

export const value290: Thing290<number> = [290];
