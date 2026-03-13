import { Calendar, BookOpen, Rss, Folder, User, LayoutDashboard, Lightbulb } from 'lucide-react';
import { Role } from '../data/mockData';

export const getTabsForRole = (role: Role) => {
  switch (role) {
    case 'Student':
    case 'Teacher':
      return [
        { id: 'calendar', label: 'Calendar', icon: Calendar },
        { id: 'courses', label: 'Courses', icon: BookOpen },
        { id: 'feeds', label: 'Feeds', icon: Rss },
        { id: 'resources', label: 'Resources', icon: Folder },
        { id: 'profile', label: 'Profile', icon: User },
      ];
    case 'Principal':
      return [
        { id: 'feeds', label: 'Feeds', icon: Rss },
        { id: 'insights', label: 'Insights', icon: Lightbulb },
        { id: 'dashboard', label: 'Progress Dashboard', icon: LayoutDashboard },
        { id: 'profile', label: 'Profile', icon: User },
      ];
    case 'Parent':
      return [
        { id: 'feeds', label: 'Feeds', icon: Rss },
        { id: 'insights', label: 'Insights', icon: Lightbulb },
        { id: 'dashboard', label: 'Student Progress', icon: LayoutDashboard },
        { id: 'profile', label: 'Profile', icon: User },
      ];
    default:
      return [];
  }
};
