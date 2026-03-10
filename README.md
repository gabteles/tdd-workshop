# 🧪 TDD Workshop — Test It Before You Break It

Welcome! This workshop has two parts, each building on the last.

---

## ⚡ Setup (do this before the workshop!)

```bash
# 1. Install dependencies
npm install

# 2. Run tests (most will fail — that's expected!)
npm test

# 3. Run in watch mode while coding (recommended)
npm run test:watch
```

You need **Node.js 18+** installed. Check with `node --version`.

---

## 🗂 Structure

```
tdd-workshop/
├── src/
│   ├── 01-user-validator.ts   ← Part 1: implement these functions
│   └── 02-user-service.ts     ← Part 2: implement this class
├── tests/
│   ├── 01-user-validator.test.ts   ← Part 1: sync tests
│   └── 02-user-service.test.ts     ← Part 2: async tests
```

---

## 🧩 Part 1 — Synchronous (15–20 min)

**File:** `src/01-user-validator.ts`  
**Tests:** `tests/01-user-validator.test.ts`

Implement four pure validation/formatting functions:

| Function | What it does |
|---|---|
| `isValidEmail(email)` | Returns true for valid email addresses |
| `isValidAge(age)` | Returns true for ages between 1 and 120 |
| `formatName(first, last)` | Returns "First Last" with proper casing |
| `isStrongPassword(pwd)` | Returns true if 8+ chars, has uppercase and number |

**How to work:**
1. Open the test file — read an example test
2. Open the source file — implement that function
3. Run `npm run test:watch` and watch tests go green 🟢
4. Move to the next function

Some tests are pre-written for you. Others have `// replace this line!` — write those yourself before implementing!

---

## ⚡ Part 2 — Asynchronous (20–25 min)

**File:** `src/02-user-service.ts`  
**Tests:** `tests/02-user-service.test.ts`

Implement three async methods on `UserService`:

| Method | What it does |
|---|---|
| `fetchUser(id)` | Fetches a single user; throws "User not found" on failure |
| `fetchUsers(ids)` | Fetches multiple users in parallel |
| `fetchUserName(id)` | Fetches a user and returns their formatted name |

**Key concepts you'll practice:**
- `async/await` in both source and test code
- `jest.fn()` to mock dependencies — no real HTTP calls!
- `mockResolvedValue` / `mockRejectedValue`
- `expect(...).rejects.toThrow()`

---

## 💡 Tips

- **Red → Green → Refactor** — get it working, then make it clean
- **Mock the boundary, not the logic** — mock the API, test your code
- If a test passes without implementing anything… the test stub needs fixing!
- `toHaveBeenCalledWith(...)` lets you assert HOW a mock was called, not just that it was

---

## 🚀 Finished early?

- Complete all the `✏️` and `🚀 Bonus` test stubs
- Add edge cases you think are missing
- Try: what happens with `fetchUsers([])` — an empty array?
- Refactor your implementation without breaking tests

---

Good luck! Remember: a failing test is not a failure — it's a roadmap. 🗺
