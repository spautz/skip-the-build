export type Thing473<T> = T extends infer U ? U[] : never;

export const value473: Thing473<number> = [473];
