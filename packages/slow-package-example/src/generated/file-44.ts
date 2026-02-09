export type Thing44<T> = T extends infer U ? U[] : never;

export const value44: Thing44<number> = [44];
