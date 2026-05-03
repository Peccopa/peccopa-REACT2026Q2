1. Task: [link](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/class-components.md)
2. Screenshot:
3. Deploy: [link](https://peccopa.github.io/peccopa-REACT2026Q2/)
4. Done 01.05.2026 / deadline 05.05.2026
5. Score: 100 / 100

---

## ✅ Functional Requirements

- [x] **Feature 1: Layout structure (5/5)**  
       The application is divided into two logical sections: search (top) and results (bottom), visually separated.

- [x] **Feature 2: LocalStorage (15/15)**  
       Search value is saved and restored on page reload.

- [x] **Feature 3: Results display (10/10)**  
       Each product displays title and description.

- [x] **Feature 4: Initial data load (10/10)**  
       On initial load:
  - with search → request includes search term
  - without search → fetch all items

- [x] **Feature 5: Search execution (20/20)**
  - input is trimmed
  - no request if value hasn't changed
  - only first page is fetched

- [x] **Feature 6: Persistence (5/5)**  
       Trimmed value is stored in localStorage.

- [x] **Feature 7: Loading state (10/10)**  
       Loader (spinner) is shown during API requests.

- [x] **Feature 8: Error handling (10/10)**
  - human-readable error message is displayed
  - API errors handled via catch
  - no uncaught promise errors in console

- [x] **Feature 9: Error Boundary (15/15)**
  - ErrorBoundary implemented
  - "simulate error" button added
  - fallback UI is shown
  - error is logged to console

---

## 🧩 Technical Requirements

- [x] Application is divided into logical modules/layers (FSD approach)
- [x] All HTML content is generated via React
- [x] Application is SPA
- [x] Vite + React + TypeScript used, build is correct

---

## ⚙️ Additional Notes

- To test API errors, you should manually change the API URL to an invalid endpoint, which will return a 4xx/5xx response.
- ErrorBoundary is used **only for render errors**, separated from API error handling.
- Error handling split:
  - API error → UI state (`isError`)
  - Render error → ErrorBoundary

---

## 🌐 Possible API Issues

If data is not loading:

- try enabling VPN (API may be region-restricted)
- or use mock data:

```ts
// src/shared/config/env.ts
export const env = {
  useMock: true,
};
```
