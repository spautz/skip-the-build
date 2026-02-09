export type Thing908<T> = T extends infer U ? U[] : never;

export const value908: Thing908<number> = [908];
