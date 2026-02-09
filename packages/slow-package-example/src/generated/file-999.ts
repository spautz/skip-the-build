export type Thing999<T> = T extends infer U ? U[] : never;

export const value999: Thing999<number> = [999];
