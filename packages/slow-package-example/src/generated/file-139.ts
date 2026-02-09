export type Thing139<T> = T extends infer U ? U[] : never;

export const value139: Thing139<number> = [139];
