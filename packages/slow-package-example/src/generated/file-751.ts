export type Thing751<T> = T extends infer U ? U[] : never;

export const value751: Thing751<number> = [751];
