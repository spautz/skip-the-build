export type Thing636<T> = T extends infer U ? U[] : never;

export const value636: Thing636<number> = [636];
