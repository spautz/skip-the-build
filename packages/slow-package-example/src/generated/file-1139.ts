export type Thing1139<T> = T extends infer U ? U[] : never;

export const value1139: Thing1139<number> = [1139];
