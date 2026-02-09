export type Thing853<T> = T extends infer U ? U[] : never;

export const value853: Thing853<number> = [853];
