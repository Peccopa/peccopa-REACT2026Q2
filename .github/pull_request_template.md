# React: Unit Testing

1. Task: [link](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/unit-testing.md)
2. Screenshot:
   <img width="993" height="583" alt="image" src="https://github.com/user-attachments/assets/6f1f6560-60f2-4442-9ab2-a87adfcc76c2" />

3. Deploy: [link](https://peccopa.github.io/peccopa-REACT2026Q2/unit-testing/)
4. Done 08.05.2026 / deadline 12.05.2026
5. Score: 100 / 100

---

## ✅ Functional Requirements

- [x] **Feature 1: Test Coverage (14/14)**
  - statement coverage ≥ 80%
  - branch coverage ≥ 50%
  - function coverage ≥ 50%
  - line coverage ≥ 50%
  - coverage reporting configured via Vitest

- [x] **Feature 2: No Functional Changes (14/14)**
  - class components preserved
  - no conversion to functional components
  - application behavior unchanged

- [x] **Feature 3: Behavior-Focused Testing (14/14)**
  - tests focus on visible behavior
  - no testing of internal state or lifecycle methods
  - public API and rendered output covered

- [x] **Feature 4: API Mocking (14/14)**
  - all API calls mocked with `vi.mock`
  - no real network requests
  - success and error scenarios tested

- [x] **Feature 5: Error Handling (14/14)**
  - API error scenarios tested
  - ErrorBoundary behavior tested
  - fallback UI rendering verified

- [x] **Feature 6: User Interactions (14/14)**
  - typing into input tested
  - search button click tested
  - loading states tested
  - repeated searches and edge cases covered

- [x] **Feature 7: LocalStorage Functionality (16/16)**
  - localStorage read on mount tested
  - localStorage write after search tested
  - empty and existing storage states covered
  - persistence behavior verified

---

## 🧪 Test Coverage

```txt
Statements : 100%
Branches   : 100%
Functions  : 100%
Lines      : 100%
```

---

## 🧩 Technical Requirements

- [x] Vitest configured as test runner
- [x] React Testing Library used for component testing
- [x] Coverage thresholds configured
- [x] Separate `.test.tsx` files created
- [x] Test utilities extracted into shared helpers
- [x] Husky pre-push hook runs tests

---

## ⚙️ Additional Notes

- All tests are implementation-independent and compatible with future refactoring to functional components.
- API calls are fully mocked to ensure deterministic tests.
- ErrorBoundary behavior tested separately from API error handling.
- Tests use semantic RTL queries (`getByRole`, `getByText`) instead of implementation details.

---

## 🌐 Coverage Command

```bash
npm run test:coverage
```

## 🌐 Run Tests

```bash
npm run test
```
