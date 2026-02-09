export type Thing993<T> = T extends infer U ? U[] : never;

export const value993: Thing993<number> = [993];
