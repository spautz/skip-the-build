export type Thing387<T> = T extends infer U ? U[] : never;

export const value387: Thing387<number> = [387];
