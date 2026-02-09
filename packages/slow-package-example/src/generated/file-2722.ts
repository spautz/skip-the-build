export type Thing2722<T> = T extends infer U ? U[] : never;

export const value2722: Thing2722<number> = [2722];
