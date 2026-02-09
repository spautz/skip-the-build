export type Thing1343<T> = T extends infer U ? U[] : never;

export const value1343: Thing1343<number> = [1343];
