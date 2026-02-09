export type Thing301<T> = T extends infer U ? U[] : never;

export const value301: Thing301<number> = [301];
