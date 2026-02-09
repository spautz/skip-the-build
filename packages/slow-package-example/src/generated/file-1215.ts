export type Thing1215<T> = T extends infer U ? U[] : never;

export const value1215: Thing1215<number> = [1215];
