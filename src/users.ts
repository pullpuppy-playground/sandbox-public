export interface User {
  id: string;
  name: string;
  email?: string;
}

const users = new Map<string, User>();

export function addUser(user: User): void {
  users.set(user.id, user);
}

export function findUser(id: string): User | undefined {
  return users.get(id);
}

export function displayName(id: string): string {
  const user = findUser(id);
  if (!user) {
    return 'unknown';
  }
  return user.name.trim();
}
