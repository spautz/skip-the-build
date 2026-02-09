export type Thing603<T> = T extends infer U ? U[] : never;

export const value603: Thing603<number> = [603];
