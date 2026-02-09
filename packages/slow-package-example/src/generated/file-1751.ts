export type Thing1751<T> = T extends infer U ? U[] : never;

export const value1751: Thing1751<number> = [1751];
