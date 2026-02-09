export type Thing96<T> = T extends infer U ? U[] : never;

export const value96: Thing96<number> = [96];
