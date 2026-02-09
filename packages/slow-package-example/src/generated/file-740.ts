export type Thing740<T> = T extends infer U ? U[] : never;

export const value740: Thing740<number> = [740];
