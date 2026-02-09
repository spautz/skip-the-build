export type Thing2702<T> = T extends infer U ? U[] : never;

export const value2702: Thing2702<number> = [2702];
