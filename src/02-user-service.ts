// ─────────────────────────────────────────────────────────────────────────────
// Part 2: UserService — Asynchronous functions
//
// Your job: make all the tests in tests/02-user-service.test.ts pass.
//
// UserService depends on an ApiClient to fetch data over the network.
// In tests, we NEVER hit a real network — we mock the ApiClient instead.
// ─────────────────────────────────────────────────────────────────────────────

export interface User {
  id: number;
  name: string;
  email: string;
}

// This is the dependency we'll mock in tests
export interface ApiClient {
  get(url: string): Promise<unknown>;
}

export class UserService {
  constructor(private readonly api: ApiClient) {}

  async fetchUser(id: number): Promise<User> {
    // TODO: call this.api.get(`/users/${id}`) and return the user
    // Throw an Error("User not found") if the API throws or returns nothing
    throw new Error("Not implemented");
  }

  async fetchUsers(ids: number[]): Promise<User[]> {
    // TODO: fetch all users in parallel using Promise.all
    throw new Error("Not implemented");
  }

  async fetchUserName(id: number): Promise<string> {
    // TODO: fetch a user and return only their name (formatted as "First Last")
    // Reuse formatName from Part 1 if you like!
    throw new Error("Not implemented");
  }
}
