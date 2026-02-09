export type Thing108<T> = T extends infer U ? U[] : never;

export const value108: Thing108<number> = [108];
