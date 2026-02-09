export type Thing199<T> = T extends infer U ? U[] : never;

export const value199: Thing199<number> = [199];
