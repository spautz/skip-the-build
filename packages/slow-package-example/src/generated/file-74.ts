export type Thing74<T> = T extends infer U ? U[] : never;

export const value74: Thing74<number> = [74];
