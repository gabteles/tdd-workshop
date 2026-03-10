export interface User {
  id: number;
  name: string;
  email: string;
}

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
    // Reuse formatName from Part 1
    throw new Error("Not implemented");
  }
}
