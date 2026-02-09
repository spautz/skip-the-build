export type Thing361<T> = T extends infer U ? U[] : never;

export const value361: Thing361<number> = [361];
