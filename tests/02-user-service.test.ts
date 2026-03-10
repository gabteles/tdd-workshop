// import { UserService, ApiClient, User } from "../src/02-user-service";

import { UserService } from "../src/02-user-service";

describe(UserService, () => {
  describe("fetchUser", () => {
    it("returns a user when the API call succeeds", async () => {});

    it("throws 'User not found' when the API rejects", async () => {});

    it("calls the API with the correct URL for any given id", async () => {});
  });

  describe("fetchUsers", () => {
    it("returns all users when given an array of ids", async () => {});

    it("returns an empty array when given no ids", async () => {});

    it("throws if any single user fetch fails", async () => {});
  });

  describe("fetchUserName", () => {
    it("returns the user's full name as a string", async () => {});

    it("throws if the user doesn't exist", async () => {});
  });
});
