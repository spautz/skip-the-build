export type Thing837<T> = T extends infer U ? U[] : never;

export const value837: Thing837<number> = [837];
