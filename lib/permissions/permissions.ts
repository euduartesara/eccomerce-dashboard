import { Role, ROLES } from '@/lib/auth/roles';

export function canManageUsers(role: Role): boolean {
  return role === ROLES.ADMIN;
}

export function canEditOwnRecords(role: Role): boolean {
  return role === ROLES.ADMIN || role === ROLES.USER;
}
