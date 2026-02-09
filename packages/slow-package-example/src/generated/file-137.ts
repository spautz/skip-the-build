export type Thing137<T> = T extends infer U ? U[] : never;

export const value137: Thing137<number> = [137];
