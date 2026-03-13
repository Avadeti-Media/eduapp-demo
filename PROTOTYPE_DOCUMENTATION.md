# EduMobile UI Prototype Documentation

## 1. Project Overview
**Name:** EduMobile UI Prototype
**Description:** A high-fidelity, mobile-first education application prototype designed to serve multiple stakeholders in an academic ecosystem: Students, Teachers, Parents, and Principals.
**Goal:** To provide a seamless, modern, and visually engaging experience for managing academic life, tracking progress, and staying connected with the campus community.

---

## 2. UI/UX Design Philosophy

### Design Aesthetic
- **Modern & Premium:** Utilizes deep shadows, subtle gradients, and high-contrast typography to create a sophisticated feel.
- **Glassmorphism:** Employs backdrop blurs (`backdrop-blur-2xl`) and semi-transparent backgrounds for floating elements like the Bottom Tab Bar.
- **Soft Geometry:** Extensive use of large rounded corners (`rounded-[24px]` to `rounded-[44px]`) for a friendly and approachable interface.
- **Mobile-First Precision:** The app is framed within a `MobileContainer` that mimics a real device, complete with a status bar and a "Dynamic Island" mock.

### Typography
- **Display (Headings):** `Outfit` - Used for impactful titles and key metrics.
- **Sans (Body):** `Inter` - Used for general UI text, ensuring high legibility.
- **Mono (Data):** `JetBrains Mono` - Used for technical details, labels, and status indicators.

### Color Palette
- **Primary:** Brand Indigo (`#6366f1`) - Used for primary actions and active states.
- **Background:** Slate (`#f8fafc`) - Provides a clean, neutral canvas.
- **Accents:** 
  - Emerald: Success/Attendance.
  - Orange: Assignments/Alerts.
  - Purple: Blogs/Community.

---

## 3. Functionality & Roles

The application dynamically adapts its UI and features based on the user's role:

### **Student**
- **Dashboard:** View overall completion, GPA, and upcoming tasks.
- **Feeds:** Stay updated with campus news and community posts.
- **Calendar:** Manage daily schedule, assignments, and guest lectures.
- **Profile:** Track academic progress (Course completion, Assignments, Attendance).

### **Teacher**
- **Dashboard:** Monitor class performance and upcoming lectures.
- **Quick Actions:** Manage courses, syllabus, and track assignment submission rates.
- **Feeds:** Post updates to the student community.

### **Parent**
- **Child's Progress:** Monitor academic performance and attendance of their child.
- **Calendar:** View the child's schedule and upcoming exams.

### **Principal**
- **Institution Overview:** High-level stats on school performance.
- **Faculty Directory:** Access and manage teaching staff information.

---

## 4. Core Screens Description

### **AuthScreen (Login/Signup)**
- **Compact Design:** Optimized to fit on a single screen without scrolling.
- **Multi-Method:** Supports Email, Phone (with OTP), Google, and Apple login.
- **Visuals:** Clean, centered layout with a focus on ease of entry.

### **DashboardScreen**
- **Hero Section:** Displays the most critical metric (e.g., Overall Completion) in a large, dark-themed card.
- **Metric Grid:** Secondary stats like GPA and Rank displayed in a clean, two-column grid.
- **Rhythm:** Uses vertical spacing and animated reveals to guide the user's eye.

### **FeedsScreen**
- **Search & Filter:** Modern search bar with integrated category tabs (All, News, Events).
- **Interactive Feed:** Cards featuring community updates, blog posts, and campus announcements.

### **CalendarScreen**
- **Mini-Calendar:** A horizontal date strip for quick navigation between days.
- **Full Calendar:** An animated overlay for a monthly view and upcoming events.
- **Task List:** Grouped view of lectures, assignments, and quizzes for the selected day.

### **ProfileScreen**
- **Identity Card:** Features a floating avatar with an animated status ring.
- **Academic Stats:** Detailed breakdown of course completion with interactive charts.
- **Saved Items:** Quick access to bookmarked notes, posts, and blogs.

---

## 5. Technical Stack

### **Frontend Framework**
- **React 19:** Utilizing functional components and modern hooks.
- **Vite:** Fast development server and build tool.
- **TypeScript:** Ensuring type safety across data models and components.

### **Styling & Animation**
- **Tailwind CSS 4:** Utility-first styling with custom theme variables.
- **Motion (Framer Motion):** Smooth layout transitions, entrance animations, and interactive hover/tap effects.
- **Lucide React:** Consistent, high-quality SVG iconography.

### **Data Visualization**
- **Recharts:** Used for rendering academic progress and performance charts.

---

## 6. Code Architecture

- **`/src/components`**: Reusable UI components (e.g., `MobileContainer`, `BottomTabBar`, `TaskCard`).
- **`/src/screens`**: Main screen components that orchestrate the UI logic.
- **`/src/data`**: Centralized mock data and TypeScript interfaces for roles, tasks, and stats.
- **`/src/index.css`**: Global styles, font imports, and Tailwind theme configuration.
- **`App.tsx`**: The root component managing navigation state and role-based rendering.

---

## 7. Future Roadmap
- **Real Backend Integration:** Connecting to a live API for real-time data.
- **Dark Mode Support:** Implementing a system-wide dark theme.
- **Push Notifications:** Real-time alerts for upcoming tasks and feed updates.
- **Offline Support:** Caching critical data for access without internet.
