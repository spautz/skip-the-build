export type Thing420<T> = T extends infer U ? U[] : never;

export const value420: Thing420<number> = [420];
