export type Thing777<T> = T extends infer U ? U[] : never;

export const value777: Thing777<number> = [777];
