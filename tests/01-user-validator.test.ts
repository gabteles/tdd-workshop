import {
  isValidEmail,
  isValidAge,
  formatName,
  isStrongPassword,
} from "../src/01-user-validator";

// ─────────────────────────────────────────────────────────────────────────────
// PART 1 — Synchronous Tests
//
// 🟢 Some tests are written for you to study as examples.
// ✏️  Some are stubs for you to complete.
// 🚀 Bonus tests are at the bottom — try them if you finish early!
// ─────────────────────────────────────────────────────────────────────────────

// ─── isValidEmail ────────────────────────────────────────────────────────────
describe("isValidEmail", () => {
  // 🟢 Example: this test is written for you
  it("returns true for a valid email", () => {
    expect(isValidEmail("user@example.com")).toBe(true);
  });

  // 🟢 Example
  it("returns false when @ is missing", () => {
    expect(isValidEmail("userexample.com")).toBe(false);
  });

  // ✏️  You write this one: empty string should be invalid
  it("returns false for an empty string", () => {
    // expect(isValidEmail(...)).toBe(...);
    expect(true).toBe(true); // replace this line!
  });

  // ✏️  You write this one: missing domain should be invalid
  it("returns false when the domain is missing", () => {
    // expect(isValidEmail(...)).toBe(...);
    expect(true).toBe(true); // replace this line!
  });
});

// ─── isValidAge ──────────────────────────────────────────────────────────────
describe("isValidAge", () => {
  // 🟢 Example
  it("returns true for a typical valid age", () => {
    expect(isValidAge(25)).toBe(true);
  });

  // ✏️  You write this one: negative age
  it("returns false for a negative age", () => {
    expect(true).toBe(true); // replace this line!
  });

  // ✏️  You write this one: age 0
  it("returns false for age 0", () => {
    expect(true).toBe(true); // replace this line!
  });

  // ✏️  You write this one: age over 120
  it("returns false for an unrealistically high age", () => {
    expect(true).toBe(true); // replace this line!
  });
});

// ─── formatName ──────────────────────────────────────────────────────────────
describe("formatName", () => {
  // 🟢 Example
  it("capitalizes and joins first and last name", () => {
    expect(formatName("john", "doe")).toBe("John Doe");
  });

  // ✏️  You write this: already capitalized inputs
  it("handles already-capitalized names", () => {
    expect(true).toBe(true); // replace this line!
  });

  // ✏️  You write this: mixed case inputs
  it("normalizes mixed-case input", () => {
    expect(true).toBe(true); // replace this line!
  });
});

// ─── isStrongPassword ────────────────────────────────────────────────────────
describe("isStrongPassword", () => {
  // 🚀 Bonus — write ALL these tests yourself!

  it("returns true for a strong password", () => {
    expect(true).toBe(true); // replace this line!
  });

  it("returns false if shorter than 8 characters", () => {
    expect(true).toBe(true); // replace this line!
  });

  it("returns false if no uppercase letter", () => {
    expect(true).toBe(true); // replace this line!
  });

  it("returns false if no number", () => {
    expect(true).toBe(true); // replace this line!
  });
});
