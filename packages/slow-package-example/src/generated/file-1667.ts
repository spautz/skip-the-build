export type Thing1667<T> = T extends infer U ? U[] : never;

export const value1667: Thing1667<number> = [1667];
