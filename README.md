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

## Tech Stack
- React 18 (Vite)
- Tailwind CSS
- localStorage for persistence

## Concepts Used
- useState — controlled inputs, CRUD state management
- useEffect — localStorage sync
- Props & callbacks — data flows down, events flow up
- Derived state — filtered list and total calculated from source state
- Lazy initializer — load localStorage before first render

## Components
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