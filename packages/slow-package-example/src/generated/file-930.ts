export type Thing930<T> = T extends infer U ? U[] : never;

export const value930: Thing930<number> = [930];
