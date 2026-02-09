export type Thing1702<T> = T extends infer U ? U[] : never;

export const value1702: Thing1702<number> = [1702];
