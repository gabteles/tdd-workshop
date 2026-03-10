// ─────────────────────────────────────────────────────────────────────────────
// FACILITATOR SOLUTIONS — Do not share with participants!
// ─────────────────────────────────────────────────────────────────────────────

// ── Part 1: UserValidator ─────────────────────────────────────────────────────

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidAge(age: number): boolean {
  return age > 0 && age <= 120;
}

export function formatName(firstName: string, lastName: string): string {
  const capitalize = (s: string) =>
    s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  return `${capitalize(firstName)} ${capitalize(lastName)}`;
}

export function isStrongPassword(password: string): boolean {
  return (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password)
  );
}

// ── Part 2: UserService ───────────────────────────────────────────────────────

import { UserService as _UserService, ApiClient, User } from "./src/02-user-service";

// Extend UserService with implemented methods:
export class UserService extends _UserService {
  constructor(api: ApiClient) {
    super(api);
  }
}

/*
  fetchUser implementation:
    async fetchUser(id: number): Promise<User> {
      try {
        const user = await this.api.get(`/users/${id}`);
        return user as User;
      } catch {
        throw new Error("User not found");
      }
    }

  fetchUsers implementation:
    async fetchUsers(ids: number[]): Promise<User[]> {
      return Promise.all(ids.map((id) => this.fetchUser(id)));
    }

  fetchUserName implementation:
    async fetchUserName(id: number): Promise<string> {
      const user = await this.fetchUser(id);
      const [first, ...rest] = user.name.split(" ");
      return formatName(first, rest.join(" "));
    }
*/
