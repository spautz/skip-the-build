export type Thing332<T> = T extends infer U ? U[] : never;

export const value332: Thing332<number> = [332];
