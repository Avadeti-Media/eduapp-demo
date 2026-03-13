export const roles = ['Student', 'Teacher', 'Principal', 'Parent'] as const;
export type Role = typeof roles[number];
