export type Thing745<T> = T extends infer U ? U[] : never;

export const value745: Thing745<number> = [745];
