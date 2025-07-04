# ✅ Task Tracker Application

A **responsive React-based task management app** that lets users securely log in, create, manage, and filter tasks — with support for dark/light themes, due dates, real-time search, and persistent local storage.

---

## 📋 Assignment Requirements & Completion

| Requirement                                | Status      |
|-------------------------------------------|-------------|
| User login with localStorage              | ✅ Completed |
| Add / Edit / Delete tasks                 | ✅ Completed |
| Persist tasks in localStorage             | ✅ Completed |
| Task filter (All / Completed / Pending)   | ✅ Completed |
| Search bar to search by title/description | ✅ Completed |
| Task due date with badges                 | ✅ Completed |
| Responsive for mobile and desktop         | ✅ Completed |
| Dark mode toggle                          | ✅ Completed |
| Animations for task actions               | ✅ Completed |
| Scroll to task from search dropdown       | ✅ Completed |
| Modal form for editing                    | ✅ Completed |

---

## 🌟 Features

- 🔐 Simple **Login screen** using `localStorage`
- 🌗 **Dark & Light mode** toggle (with transition)
- 🧾 **Add/Edit/Delete** tasks with inline form and modal
- 📅 **Due dates** with badges:
  - `Today`, `Tomorrow`, `Overdue`
- 🔍 **Live search** with dropdown + scroll-to-task
- 📁 **LocalStorage** persistence
- 🔃 **Task filter** (All, Completed, Pending)
- 🎨 Smooth UI animations on task create/delete
- 📱 Fully **Responsive Design**

---

## 📦 Tech Stack

- **React** with functional components & hooks
- **CSS** for styling and transitions
- **UUID** for task IDs
- **HTML5 LocalStorage** for persistence
- **JavaScript (ES6+)**

---

## 📂 Folder Structure

src/
├── components/
│ ├── Login.js
│ ├── TaskForm.js
│ ├── TaskList.js
│ ├── TaskItem.js
│ └── TaskFilter.js
├── styles/
│ └── App.css
├── utils/
│ └── localStorage.js
├── App.js
└── index.js


## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/DISCONECTED-png/Task_Tracker_Intern_Project_React.git
cd task-tracker-app

npm install

npm start
