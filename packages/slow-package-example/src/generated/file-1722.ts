export type Thing1722<T> = T extends infer U ? U[] : never;

export const value1722: Thing1722<number> = [1722];
