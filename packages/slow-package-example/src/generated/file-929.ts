export type Thing929<T> = T extends infer U ? U[] : never;

export const value929: Thing929<number> = [929];
