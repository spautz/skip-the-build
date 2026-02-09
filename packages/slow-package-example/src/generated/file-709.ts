export type Thing709<T> = T extends infer U ? U[] : never;

export const value709: Thing709<number> = [709];
