export type Thing1795<T> = T extends infer U ? U[] : never;

export const value1795: Thing1795<number> = [1795];
