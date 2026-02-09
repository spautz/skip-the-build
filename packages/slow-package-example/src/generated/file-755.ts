export type Thing755<T> = T extends infer U ? U[] : never;

export const value755: Thing755<number> = [755];
