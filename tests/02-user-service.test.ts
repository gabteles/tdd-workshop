import { UserService, ApiClient, User } from "../src/02-user-service";

// ─────────────────────────────────────────────────────────────────────────────
// PART 2 — Asynchronous Tests
//
// Key concepts introduced here:
//   • jest.fn()          — create a mock function
//   • mockResolvedValue  — make it resolve with a value
//   • mockRejectedValue  — make it reject with an error
//   • async/await        — wait for promises in tests
//   • expect(...).rejects.toThrow() — assert a promise rejects
// ─────────────────────────────────────────────────────────────────────────────

// ─── Test Setup ──────────────────────────────────────────────────────────────
//
// We create a FAKE ApiClient so tests never touch a real network.
// jest.fn() creates a spy we can control and inspect.

const mockUsers: User[] = [
  { id: 1, name: "Alice Smith", email: "alice@example.com" },
  { id: 2, name: "Bob Jones", email: "bob@example.com" },
  { id: 3, name: "Carol White", email: "carol@example.com" },
];

function createMockApi(): jest.Mocked<ApiClient> {
  return {
    get: jest.fn(),
  };
}

// ─── fetchUser ───────────────────────────────────────────────────────────────
describe("UserService.fetchUser", () => {
  // 🟢 Example: resolves with a user
  it("returns a user when the API call succeeds", async () => {
    const api = createMockApi();
    const service = new UserService(api);

    api.get.mockResolvedValue(mockUsers[0]);

    const user = await service.fetchUser(1);

    expect(user).toEqual({ id: 1, name: "Alice Smith", email: "alice@example.com" });
    expect(api.get).toHaveBeenCalledWith("/users/1"); // was it called correctly?
  });

  // 🟢 Example: rejects when user not found
  it("throws 'User not found' when the API rejects", async () => {
    const api = createMockApi();
    const service = new UserService(api);

    api.get.mockRejectedValue(new Error("404"));

    await expect(service.fetchUser(999)).rejects.toThrow("User not found");
  });

  // ✏️  You write this: verify the correct URL is called for user id 42
  it("calls the API with the correct URL for any given id", async () => {
    const api = createMockApi();
    const service = new UserService(api);

    // api.get.mockResolvedValue(...);
    // await service.fetchUser(...);
    // expect(api.get).toHaveBeenCalledWith(...);
    expect(true).toBe(true); // replace this line!
  });
});

// ─── fetchUsers ──────────────────────────────────────────────────────────────
describe("UserService.fetchUsers", () => {
  // 🟢 Example: fetches multiple users in parallel
  it("returns all users when given an array of ids", async () => {
    const api = createMockApi();
    const service = new UserService(api);

    // mockResolvedValueOnce queues up values — first call gets [0], second gets [1], etc.
    api.get.mockResolvedValueOnce(mockUsers[0]);
    api.get.mockResolvedValueOnce(mockUsers[1]);

    const users = await service.fetchUsers([1, 2]);

    expect(users).toHaveLength(2);
    expect(users[0].name).toBe("Alice Smith");
    expect(users[1].name).toBe("Bob Jones");
  });

  // ✏️  You write this: empty array should return empty array
  it("returns an empty array when given no ids", async () => {
    expect(true).toBe(true); // replace this line!
  });

  // ✏️  You write this: if one user fails, the whole call should fail
  it("throws if any single user fetch fails", async () => {
    expect(true).toBe(true); // replace this line!
  });
});

// ─── fetchUserName ───────────────────────────────────────────────────────────
describe("UserService.fetchUserName", () => {
  // 🚀 Bonus — write ALL these tests yourself!

  it("returns the user's full name as a string", async () => {
    expect(true).toBe(true); // replace this line!
  });

  it("throws if the user doesn't exist", async () => {
    expect(true).toBe(true); // replace this line!
  });
});
