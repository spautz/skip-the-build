export type Thing1280<T> = T extends infer U ? U[] : never;

export const value1280: Thing1280<number> = [1280];
