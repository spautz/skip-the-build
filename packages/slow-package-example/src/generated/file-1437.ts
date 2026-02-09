export type Thing1437<T> = T extends infer U ? U[] : never;

export const value1437: Thing1437<number> = [1437];
