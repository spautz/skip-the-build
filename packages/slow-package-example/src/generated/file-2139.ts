export type Thing2139<T> = T extends infer U ? U[] : never;

export const value2139: Thing2139<number> = [2139];
