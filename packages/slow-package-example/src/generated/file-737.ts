export type Thing737<T> = T extends infer U ? U[] : never;

export const value737: Thing737<number> = [737];
