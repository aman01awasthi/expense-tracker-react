# Expense Tracker

A full-stack React application to track personal expenses with real-time filtering, editing, and persistent storage.

## Live Demo
[View on Vercel](https://expense-tracker-react-olive-ten.vercel.app/)

## Features
- Add expenses with name, category, and amount
- Edit and delete existing expenses
- Filter expenses by category in real time
- Running total updates automatically
- Data persists on page refresh using localStorage
- User authentication with JWT (via reqres.in)
- Dark/light theme toggle persisted across session
- Per-field form validation with error messages
- Loading and error states on form submission

## Tech Stack
- React 18 (Vite)
- Tailwind CSS
- localStorage for persistence
- Context API (Auth + Theme)

## Concepts Used
- useState — controlled inputs, CRUD state management
- useEffect — localStorage sync
- Props & callbacks — data flows down, events flow up
- Derived state — filtered list and total calculated from source state
- Lazy initializer — load localStorage before first render
- useContext — global state for auth and theme
- Custom hooks — useLocalStorage for persistent state
- Async/await with try/catch — API calls and error handling
- Fake API simulation — loading states without a real backend

## Components
- Navbar — logout button, consumes AuthContext
- Login — controlled form, POSTs to reqres.in API
- `ExpenseForm` — controlled form for adding and editing expenses
- `ExpenseList` — renders list of ExpenseItem components
- `ExpenseItem` — displays individual expense with edit and delete
- `ExpenseTotal` — calculates and displays running total using reduce
- `CategoryFilter` — filters expense list by category

## Getting Started
```bash
git clone https://github.com/aman01awasthi/expense-tracker
cd expense-tracker
npm install
npm run dev
```