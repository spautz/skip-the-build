export type Thing1629<T> = T extends infer U ? U[] : never;

export const value1629: Thing1629<number> = [1629];
