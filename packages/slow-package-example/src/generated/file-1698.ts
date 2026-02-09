export type Thing1698<T> = T extends infer U ? U[] : never;

export const value1698: Thing1698<number> = [1698];
