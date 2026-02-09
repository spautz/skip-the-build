export type Thing401<T> = T extends infer U ? U[] : never;

export const value401: Thing401<number> = [401];
