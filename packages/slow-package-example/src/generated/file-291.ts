export type Thing291<T> = T extends infer U ? U[] : never;

export const value291: Thing291<number> = [291];
