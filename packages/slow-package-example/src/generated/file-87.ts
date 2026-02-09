export type Thing87<T> = T extends infer U ? U[] : never;

export const value87: Thing87<number> = [87];
