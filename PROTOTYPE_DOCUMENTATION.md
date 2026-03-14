# EduApp Demo Prototype — Detailed Product & Functional Documentation

## 1) What this repository is
This repository contains a **mobile-first UI prototype** of an education platform (rendered in a web browser with React + Vite) that is clearly structured like a future **React Native app**.

The prototype simulates the complete learner ecosystem and supports four personas:
- Student
- Teacher
- Parent
- Principal

The current implementation uses mock data and in-memory navigation state to demonstrate user flows, screen hierarchy, and interactions before backend/API integration.

---

## 2) Product goal and positioning
The demo models a unified academic app where users can:
- track classes, tasks, and academic performance,
- browse institutional updates and social/academic feed posts,
- manage resources (notes, videos, papers),
- review progress insights,
- access profile, saved items, notifications, and settings.

It is a **functional prototype** with realistic UX patterns (tabs, details screens, onboarding, role-aware layouts), designed to be portable to a React Native architecture.

---

## 3) Current app architecture in this repo

### 3.1 State/navigation model
The app currently uses local state in `App.tsx` rather than a routing library:
- Global app state phases: `splash` → `auth` → `onboarding`/`main`
- Role state: `Student | Teacher | Parent | Principal`
- Bottom-tab state (role-dependent)
- Detail-screen stack emulation via `currentScreen` object (`id` + `params`)

This models a navigation graph suitable for direct migration to React Native navigators.

### 3.2 UI shell
- `MobileContainer` emulates a mobile device frame with status bar/notch and bottom home indicator.
- `BottomTabBar` renders role-specific tab sets and active-state transitions.
- Screen transitions use Motion (`AnimatePresence`, `motion.div`) for native-like enter/exit behavior.

### 3.3 Data layer (prototype)
All content is mock data in `src/data/mockData/*`:
- roles
- tasks
- courses
- feeds
- blogs
- guest lectures
- progress stats
- notifications
- resources
- chat history

---

## 4) Role model and role-based experience

### Supported roles
- Student
- Teacher
- Principal
- Parent

### Tab mapping by role
- **Student / Teacher:** Calendar, Courses, Feeds, Resources, Profile
- **Principal:** Feeds, Insights, Progress Dashboard, Profile
- **Parent:** Feeds, Insights, Student Progress (dashboard), Profile

### Role switching behavior
- App includes a role-switcher (outside phone frame) for demo/testing.
- On role change, active tab resets to the first valid tab and detail screen resets to main.

---

## 5) End-to-end user flow
1. **Splash screen** auto-advances after timed delay.
2. **Auth screen** supports:
   - email/password flow,
   - phone flow with OTP step,
   - visual options for Google/Apple sign-in.
3. **Signup path** leads to onboarding.
4. **Onboarding** collects profile basics and role selection.
5. **Main app** opens with role-specific tabs.
6. **List-to-detail navigation** is available across courses, tasks, feeds, blogs, resources, notifications, settings, and saved items.

---

## 6) Detailed feature inventory (screen-by-screen)

## 6.1 Entry/Auth module

### SplashScreen
- Branded intro with animation.
- Auto transition after ~2.5 seconds.

### AuthScreen
- Toggle between login/signup state.
- Toggle auth method: email vs phone.
- OTP sub-flow for phone auth (mock input boxes).
- "Forgot password" UI in email login mode.
- CTA routing:
  - login → main app
  - signup → onboarding

### OnboardingScreen
- Multi-step onboarding.
- Captures fields like role, name, stream, semester.
- Completion callback configures role and enters main app.

## 6.2 Primary role-driven tab screens

### CalendarScreen
- Date strip with selected-day interaction.
- Full calendar overlay toggle.
- Displays tasks for selected date (prototype currently keyed around Oct 15 sample data).
- Task-to-detail navigation by task type:
  - lecture → course detail
  - quiz → quiz detail
  - assignment → assignment detail
  - guest lecture → guest lecture detail
- Guest lecture cards open lecture detail.

### CoursesScreen
- Search courses.
- Filter tabs (All / In Progress / Completed / Archived).
- Branch filter via modal.
- Course cards show metadata and progress.
- Course detail navigation on card tap.

### FeedsScreen
- Search feed posts.
- Category tabs (All / Announcements / Academic / General).
- Notification bell opens notifications list.
- Feed post cards with like/comment affordances.
- Feed card and comment actions navigate to feed detail.

### ResourcesScreen
- 3 sub-modes:
  - Materials
  - Blogs
  - Ask AI
- Materials mode:
  - category cards for PDF Notes, Video Lectures, Study Materials, Previous Papers
  - category opens `ResourceListScreen`
  - quick list with download/play actions (mock)
- Blogs mode:
  - blog card listing; opens `BlogDetailScreen`
- Ask AI mode:
  - chat history rendering
  - input + send UI for assistant queries (mock)

### ProfileScreen
- Role-aware identity header and profile meta.
- Toggle between progress overview/details.
- Engagement chart view toggle (weekly/monthly).
- Quick links to:
  - settings,
  - saved items (feeds/blogs/resources buckets),
  - assignment/attendance graph detail screens.
- Shows progress/engagement statistics with chart components.

### DashboardScreen (role-specific context)
- For Parent/Principal roles, used as high-level progress dashboard tab.
- Displays aggregate KPI cards and visual trend/progress sections.

### InsightsScreen (role-specific context)
- Insight-centric screen for parent/principal perspectives.
- Uses institution/academic data visual blocks and charting for progress narratives.

## 6.3 Secondary/detail screens

### CourseDetailScreen
- Deep view of selected course information and progress context.
- Back navigation to previous app surface.

### QuizDetailScreen
- Quiz-level detail mock; assignment/attempt-related context.

### AssignmentDetailScreen
- Assignment metadata and instructions.
- Reference material section.
- Submission area UX.
- Toggleable AI doubt chat panel within screen.

### GuestLectureDetailScreen
- Speaker/topic/date details for guest lecture.
- Action-oriented CTA area (e.g., joining/reminders).

### FeedDetailScreen
- Expanded feed post view with post metadata and interactions.

### BlogDetailScreen
- Long-form blog article view from blog listing.

### ResourceListScreen
- Resource list scoped to selected category.
- Search within selected category.
- Contextual action button:
  - download for files,
  - play for videos.
- Empty-state handling when query has no results.

### NotificationListScreen
- Notification feed with read/unread styling.
- Type-aware iconography (academic/event/announcement).
- Tap to open notification detail.
- "Mark all read" CTA (presentational in prototype).

### NotificationDetailScreen
- Full notification content display.
- Type-aware icon hero.
- Primary CTA button (View Details).

### SettingsScreen
- Grouped setting sections:
  - Account (personal info, password/security, notifications)
  - About (privacy policy, terms, help/support)
- Tapping item opens generic detail screen.
- Logout action returns app to auth state.

### SettingDetailScreen
- Reusable template detail page for selected settings item.

### StatsGraphScreen
- Chart detail screen for Assignment or Attendance metrics.
- Displays trend chart + per-item breakdown rows.

### SavedItemsScreen
- Displays saved entities by type (feeds/blogs/resources context).
- Opens corresponding detail screen where applicable.

---

## 7) Component-level functionality
Reusable UI components include:
- `BottomTabBar`: role-sensitive tab navigation with animated active indicator.
- `MobileContainer`: mobile shell wrapper.
- `TaskCard`, `CourseCard`, `FeedPost`, `BlogCard`, `GuestLectureCard`, `ResourceCard`: list item building blocks.
- `ProgressChart`: reusable chart wrapper used by profile/stats/insights/dashboard surfaces.
- `ChatBubble`: user/bot bubble renderer for AI chat mode.

This decomposition is suitable for a React Native migration by mapping each component to platform equivalents and preserving props contracts.

---

## 8) Prototype behavior boundaries
What is implemented now:
- role-aware UX,
- mock navigation graph,
- realistic UI flows,
- mock search/filtering logic on local arrays,
- charts and animated transitions.

What is intentionally mocked (not production-complete):
- authentication and OTP verification,
- backend data sync,
- persistence/session management,
- real-time chat/AI responses,
- resource downloads/video playback,
- settings write operations.

---

## 9) Tech stack (current)
- React 19
- TypeScript
- Vite
- Tailwind CSS
- Motion (Framer Motion package)
- Lucide React icons
- Recharts

---

## 10) React Native migration blueprint
This prototype can be converted with minimal product re-design:

### 10.1 Navigation mapping
- `appState` + `currentScreen` → React Navigation stacks/tabs:
  - Auth Stack: Splash/Auth/Onboarding
  - Main Tabs (role-driven)
  - Nested detail stacks per tab

### 10.2 UI mapping
- Tailwind utility classes → NativeWind or StyleSheet tokens
- `MobileContainer` mock chrome removed in native (real device chrome takes over)
- `motion/react` transitions → Reanimated / Moti / native stack transitions

### 10.3 Data/services mapping
- `mockData` modules → API service layer + state management (Redux Toolkit, Zustand, or React Query)
- Replace `alert`/placeholder handlers with real file/media/user workflows.

### 10.4 Feature parity checklist for RN implementation
- [ ] Role-based tab definitions and role-switch logic
- [ ] Entry flow: splash/auth/onboarding
- [ ] Screen set parity (all primary + detail screens)
- [ ] Feed/resource/course filtering + search
- [ ] Notifications list/detail behavior
- [ ] Profile charts + stats graph drill-down
- [ ] Settings + logout + saved items flows
- [ ] AI assistant chat UX shell

---

## 11) Suggested next implementation steps
1. Introduce route constants and typed route params.
2. Move current mock data to typed repository/service interfaces.
3. Add API-ready domain models (Course, Task, Feed, Resource, Notification, UserProfile).
4. Add global app state for auth/session/role and cached entities.
5. Implement backend endpoints (or BFF) incrementally by module.
6. Add analytics events for critical user actions (tab switch, card click, detail open, search/filter usage).
7. Add test coverage for role matrix and navigation edge cases.

---

## 12) Summary
This repo already provides a complete, role-aware, mobile UX blueprint of an education super-app. It is not just a static UI kit; it demonstrates full journey flows and functional intent for each module, making it a strong base for a production React Native build.
