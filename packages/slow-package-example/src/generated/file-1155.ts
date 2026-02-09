export type Thing1155<T> = T extends infer U ? U[] : never;

export const value1155: Thing1155<number> = [1155];
