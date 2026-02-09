export type Thing1755<T> = T extends infer U ? U[] : never;

export const value1755: Thing1755<number> = [1755];
