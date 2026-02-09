export type Thing2301<T> = T extends infer U ? U[] : never;

export const value2301: Thing2301<number> = [2301];
