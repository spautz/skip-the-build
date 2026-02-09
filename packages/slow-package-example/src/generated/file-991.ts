export type Thing991<T> = T extends infer U ? U[] : never;

export const value991: Thing991<number> = [991];
