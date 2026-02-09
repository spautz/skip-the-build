export type Thing484<T> = T extends infer U ? U[] : never;

export const value484: Thing484<number> = [484];
