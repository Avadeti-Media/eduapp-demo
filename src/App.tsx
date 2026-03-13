/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MobileContainer } from './components/MobileContainer';
import { BottomTabBar } from './components/BottomTabBar';
import { getTabsForRole } from './navigation/BottomTabNavigation';
import { roles, Role } from './data/mockData';
import { AnimatePresence, motion } from 'motion/react';

import { SplashScreen } from './screens/SplashScreen';
import { AuthScreen } from './screens/AuthScreen';
import { OnboardingScreen } from './screens/OnboardingScreen';

import { CalendarScreen } from './screens/CalendarScreen';
import { CoursesScreen } from './screens/CoursesScreen';
import { FeedsScreen } from './screens/FeedsScreen';
import { ResourcesScreen } from './screens/ResourcesScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { DashboardScreen } from './screens/DashboardScreen';
import { InsightsScreen } from './screens/InsightsScreen';

import { CourseDetailScreen } from './screens/CourseDetailScreen';
import { QuizDetailScreen } from './screens/QuizDetailScreen';
import { AssignmentDetailScreen } from './screens/AssignmentDetailScreen';
import { GuestLectureDetailScreen } from './screens/GuestLectureDetailScreen';
import { FeedDetailScreen } from './screens/FeedDetailScreen';
import { NotificationListScreen } from './screens/NotificationListScreen';
import { NotificationDetailScreen } from './screens/NotificationDetailScreen';
import { ResourceListScreen } from './screens/ResourceListScreen';
import { BlogDetailScreen } from './screens/BlogDetailScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { SettingDetailScreen } from './screens/SettingDetailScreen';
import { StatsGraphScreen } from './screens/StatsGraphScreen';
import { SavedItemsScreen } from './screens/SavedItemsScreen';

type AppState = 'splash' | 'auth' | 'onboarding' | 'main';

export default function App() {
  const [appState, setAppState] = useState<AppState>('splash');
  const [role, setRole] = useState<Role>('Student');
  
  const tabs = getTabsForRole(role);
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  
  // Navigation state within 'main'
  const [currentScreen, setCurrentScreen] = useState<{ id: string; params?: any }>({ id: 'main' });

  const handleLogin = () => {
    setAppState('main');
  };

  const handleSignup = () => {
    setAppState('onboarding');
  };

  const handleOnboardingComplete = (selectedRole: Role) => {
    setRole(selectedRole);
    setActiveTab(getTabsForRole(selectedRole)[0].id);
    setAppState('main');
  };

  const handleLogout = () => {
    setAppState('auth');
    setCurrentScreen({ id: 'main' });
  };

  // When role changes (for testing outside mobile UI), reset active tab and screen
  const handleRoleChange = (newRole: Role) => {
    setRole(newRole);
    setActiveTab(getTabsForRole(newRole)[0].id);
    setCurrentScreen({ id: 'main' });
  };

  const handleNavigate = (screenId: string, params?: any) => {
    setCurrentScreen({ id: screenId, params });
  };

  const handleBack = () => {
    // Handle specific back navigations
    if (currentScreen.id === 'notificationDetail') {
      setCurrentScreen({ id: 'notifications' });
    } else if (currentScreen.id === 'settingDetail') {
      setCurrentScreen({ id: 'settings' });
    } else {
      setCurrentScreen({ id: 'main' });
    }
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentScreen({ id: 'main' });
  };

  const renderMainScreen = () => {
    switch (activeTab) {
      case 'calendar': return <CalendarScreen role={role} onNavigate={handleNavigate} />;
      case 'courses': return <CoursesScreen role={role} onNavigate={handleNavigate} />;
      case 'feeds': return <FeedsScreen role={role} onNavigate={handleNavigate} />;
      case 'resources': return <ResourcesScreen role={role} onNavigate={handleNavigate} />;
      case 'profile': return <ProfileScreen role={role} onNavigate={handleNavigate} />;
      case 'dashboard': return <DashboardScreen role={role} />;
      case 'insights': return <InsightsScreen role={role} />;
      default: return <div className="p-6">Screen not found</div>;
    }
  };

  const renderScreen = () => {
    if (appState === 'splash') {
      return <SplashScreen onFinish={() => setAppState('auth')} />;
    }
    
    if (appState === 'auth') {
      return <AuthScreen onLogin={handleLogin} onSignup={handleSignup} />;
    }

    if (appState === 'onboarding') {
      return <OnboardingScreen onComplete={handleOnboardingComplete} />;
    }

    if (currentScreen.id === 'main') {
      return renderMainScreen();
    }

    switch (currentScreen.id) {
      case 'courseDetail':
        return <CourseDetailScreen courseId={currentScreen.params?.courseId} onBack={handleBack} />;
      case 'quizDetail':
        return <QuizDetailScreen taskId={currentScreen.params?.taskId} onBack={handleBack} />;
      case 'assignmentDetail':
        return <AssignmentDetailScreen taskId={currentScreen.params?.taskId} onBack={handleBack} />;
      case 'guestLectureDetail':
        return <GuestLectureDetailScreen lectureId={currentScreen.params?.lectureId} onBack={handleBack} />;
      case 'feedDetail':
        return <FeedDetailScreen postId={currentScreen.params?.postId} onBack={handleBack} />;
      case 'notifications':
        return <NotificationListScreen onBack={handleBack} onNavigate={handleNavigate} />;
      case 'notificationDetail':
        return <NotificationDetailScreen notificationId={currentScreen.params?.notificationId} onBack={handleBack} />;
      case 'resourceList':
        return <ResourceListScreen category={currentScreen.params?.category} onBack={handleBack} />;
      case 'blogDetail':
        return <BlogDetailScreen blogId={currentScreen.params?.blogId} onBack={handleBack} />;
      case 'settings':
        return <SettingsScreen onBack={handleBack} onNavigate={handleNavigate} onLogout={handleLogout} />;
      case 'settingDetail':
        return <SettingDetailScreen title={currentScreen.params?.title} onBack={handleBack} />;
      case 'statsGraph':
        return <StatsGraphScreen title={currentScreen.params?.title} onBack={handleBack} />;
      case 'savedItems':
        return <SavedItemsScreen type={currentScreen.params?.type} onBack={handleBack} onNavigate={handleNavigate} />;
      default:
        return renderMainScreen();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-8">
      {/* Role Selector (Outside Mobile UI) - Only show in main app state for testing */}
      {appState === 'main' && (
        <div className="mb-6 bg-white p-4 rounded-2xl shadow-sm flex gap-2 overflow-x-auto max-w-full">
          {roles.map(r => (
            <button
              key={r}
              onClick={() => handleRoleChange(r)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors whitespace-nowrap ${
                role === r 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {r} View
            </button>
          ))}
        </div>
      )}

      <MobileContainer
        bottomBar={
          appState === 'main' && currentScreen.id === 'main' ? (
            <BottomTabBar 
              tabs={tabs} 
              activeTab={activeTab} 
              onTabChange={handleTabChange} 
            />
          ) : undefined
        }
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={appState === 'main' ? (currentScreen.id === 'main' ? activeTab : currentScreen.id) : appState}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </MobileContainer>
    </div>
  );
}
