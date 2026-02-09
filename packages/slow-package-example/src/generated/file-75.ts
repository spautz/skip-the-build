export type Thing75<T> = T extends infer U ? U[] : never;

export const value75: Thing75<number> = [75];
