export type Thing1862<T> = T extends infer U ? U[] : never;

export const value1862: Thing1862<number> = [1862];
