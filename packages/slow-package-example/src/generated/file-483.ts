export type Thing483<T> = T extends infer U ? U[] : never;

export const value483: Thing483<number> = [483];
