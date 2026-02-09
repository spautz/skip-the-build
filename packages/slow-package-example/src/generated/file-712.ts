export type Thing712<T> = T extends infer U ? U[] : never;

export const value712: Thing712<number> = [712];
