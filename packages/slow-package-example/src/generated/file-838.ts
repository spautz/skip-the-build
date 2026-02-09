export type Thing838<T> = T extends infer U ? U[] : never;

export const value838: Thing838<number> = [838];
