export type Thing1585<T> = T extends infer U ? U[] : never;

export const value1585: Thing1585<number> = [1585];
