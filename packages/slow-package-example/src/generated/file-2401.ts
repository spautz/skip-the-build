export type Thing2401<T> = T extends infer U ? U[] : never;

export const value2401: Thing2401<number> = [2401];
