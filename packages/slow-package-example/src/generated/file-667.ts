export type Thing667<T> = T extends infer U ? U[] : never;

export const value667: Thing667<number> = [667];
