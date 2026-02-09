export type Thing1327<T> = T extends infer U ? U[] : never;

export const value1327: Thing1327<number> = [1327];
