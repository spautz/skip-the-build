export type Thing1290<T> = T extends infer U ? U[] : never;

export const value1290: Thing1290<number> = [1290];
