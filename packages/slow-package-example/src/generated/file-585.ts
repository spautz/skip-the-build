export type Thing585<T> = T extends infer U ? U[] : never;

export const value585: Thing585<number> = [585];
